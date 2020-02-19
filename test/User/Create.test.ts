import Chai from 'chai'
import 'mocha'
import 'livedoc-mocha'

import confia from '../../src/confia'

const expect: Chai.ExpectStatic = Chai.expect
const should: Chai.Should = Chai.should()

/* describe('teste 1', () => {
    it('teste 1', () => {
        expect(confia(1, 1)).to.be.equal(2)
    })
}) */

feature(`usuário quer somar dois numeros`, () => {
    background('usuario nao esta logado', () => {
        scenarioOutline(`
            Examples:

            | Num1 | Num2 | Sum |
            | 2    | 2    | 4   |
        `, () => {
            let num1: number
            let num2: number

            given('the first number is <Num1> and second is <Num2>', () => {
                num1 = scenarioOutlineContext.example.Num1
            })

            when('the second is <Num2>', () => {
                num2 = scenarioOutlineContext.example.Num2
            })

            then('the costumer receive the value <Sum>', () => {
                confia(num1, num2).should.be.equal(scenarioOutlineContext.example.Sum)
            })
        })
    })
})