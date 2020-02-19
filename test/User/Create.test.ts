import Chai from 'chai'
import 'mocha'

import confia from '../../src/confia'

const expect: Chai.ExpectStatic = Chai.expect
const should: Chai.Should = Chai.should()

describe('teste 1', () => {
    it('teste 1', () => {
        expect(confia(1, 1)).to.be.equal(2)
    })
})