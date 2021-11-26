import noun from './_noun.js'
import verb from './_verb.js'

// 'boot the ball'   -  'the red boot'
// 'boots the ball'  -   'the red boots'
const clue = {
  beforeTags: Object.assign({}, verb.beforeTags, noun.beforeTags, {
    // Noun: undefined
  }),
  afterTags: Object.assign({}, verb.afterTags, noun.afterTags, {
    ProperNoun: 'Infinitive', Gerund: 'Infinitive', Adjective: 'Infinitive',
    Copula: 'Singular'
  }),
  beforeWords: Object.assign({}, verb.beforeWords, noun.beforeWords),
  afterWords: Object.assign({}, verb.afterWords, noun.afterWords),
}
// console.log(clue.afterTags)
export default clue