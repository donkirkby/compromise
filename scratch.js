/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import nlp from './builds/compromise.cjs'
// nlp.verbose('tagger')

// bug!
// let doc = nlp(`john walks`)
// let s = doc.sentences()
// s.toFutureTense().fullSentences()
// console.log(s.text())


let txt
// txt = `please go `

// let arr = [
//   // `Toronto`,
//   `delta`,
//   `farming`,
//   `Toronto`,
//   `Toronto marlies`,
// ]
// console.log(nlp.compile(arr))

// bug: doc-match issue
// txt = `clearly did suggest`
// let doc = nlp(txt)
// let vb = doc.verbs()
// let parsed = vb.parse()[0]
// parsed.auxiliary.debug()
// vb.match(parsed.auxiliary).debug()

// bug 1
// txt = `he out-lived`
// txt = `he out lived`
// txt = `pseudo clean`
// txt = `he was anti cleaning`
// // txt = `he was anti cleaning`
txt = 'i was really not being walked'
let doc = nlp(txt)//.tag('Verb')
// let m = doc.match('walking')
// doc.replace(m, 'food')

doc.verbs().toInfinitive()
// doc.verbs().toPresentTense()
doc.debug()

// vb.replace(will, 'fooWill')
// vb.replace(walk, 'foowalk')
// doc.verbs().toPastTense()
// doc.debug()


// AND issue:
// let doc = nlp('toronto and montreal. Sydney and Paris.')
// console.log(nlp.parseMatch('(#Place && #Noun)')[0].choices)
// let m = doc.match('(#Place && #Noun)').debug()

/*










*/
