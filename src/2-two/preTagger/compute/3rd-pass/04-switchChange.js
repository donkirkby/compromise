import fastTag from '../_fastTag.js'
// import fillTags from '../3rd-pass/_fillTags.js'

const DEBUG = false

const lookAtWord = function (term, byWord) {
  if (!term) {
    return null
  }
  // look at word
  if (byWord.hasOwnProperty(term.normal)) {
    if (DEBUG) {
      console.log(term.normal, '->', byWord[term.normal])
    }
    return byWord[term.normal]
  }
  return null
}

const lookAtTag = function (term, byTag) {
  if (!term) {
    return null
  }
  // look at tags
  let tags = Array.from(term.tags)
  // very rough sort, so 'Noun' is after ProperNoun, etc
  tags = tags.sort((a, b) => (a.length > b.length ? -1 : 1))
  for (let i = 0; i < tags.length; i += 1) {
    if (byTag[tags[i]]) {
      if (DEBUG) {
        console.log(tags[i], '->', byTag[tags[i]])
      }
      return byTag[tags[i]]
    }
  }
  return null
}

const goodAlready = function (term) {
  const fine = ['ProperNoun', 'Acronym']
  return fine.some(tag => term.tags.has(tag))
}

const swtichLexicon = function (terms, i, model) {
  let term = terms[i]
  // do we already have a good tag?
  if (goodAlready(term)) {
    return
  }
  const { switchers } = model.two
  const keys = Object.keys(switchers)
  for (let o = 0; o < keys.length; o += 1) {
    const { words, before, after, beforeWords, afterWords, ownTags } = switchers[keys[o]]
    if (words.hasOwnProperty(term.normal)) {
      if (DEBUG) {
        console.log('===> ' + term.text)
      }
      // look at term's own tags for obvious hints, first
      let tag = lookAtTag(terms[i], ownTags || {})
      // look -> right word
      tag = tag || lookAtWord(terms[i + 1], afterWords)
      // look <- left word, second
      tag = tag || lookAtWord(terms[i - 1], beforeWords)
      // look -> right tag next
      tag = tag || lookAtTag(terms[i + 1], after)
      // look <- left tag next
      tag = tag || lookAtTag(terms[i - 1], before)
      if (tag && !term.tags.has(tag)) {
        // console.log(term, tag)
        term.tags.clear()
        fastTag(term, tag, `3-[switch] ${keys[o]}`)
        if (model.two.tagSet[tag]) {
          let parents = model.two.tagSet[tag].parents
          fastTag(term, parents, `3-switch-infer from ${tag}`)
        }
        // deduce parent tags?
        // fillTags(terms, i, model)
        return //one hint is good-enough
      }
    }
  }
}
export default swtichLexicon