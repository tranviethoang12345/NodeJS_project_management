import chai from 'chai';
import { getLetterCount } from '../src/untils/letter-count.js'

const {expect} = chai;

// two new mocha keywords
describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
      const expected = {}
      const actual = getLetterCount('')
      expect(actual).to.deep.equal(expected)        
  })

  it('returns the correct letter count for a word with only one of each letter', () => {
      const expected = { c: 1, a : 1, t: 1 }
      const actual = getLetterCount('cat')
      expect(actual).to.deep.equal(expected)
  })

  it('returns the correct letter count for a word with Mississippi', () => {
      const expected = { m: 1, i : 4, s: 4, p: 2 }
      const actual = getLetterCount('mississippi')
      expect(actual).to.deep.equal(expected)
  })
})