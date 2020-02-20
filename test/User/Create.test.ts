import chai, { } from 'chai'
import 'mocha'
import 'livedoc-mocha'
import chaiHttp from 'chai-http'
import chaiThings from 'chai-things'
import mongoose from 'mongoose'

chai.use(chaiHttp)
chai.use(chaiThings)

import app from '../../src/app'

import userModel from '../../src/models/user'

const expect: Chai.ExpectStatic = chai.expect
const should: Chai.Should = chai.should()

feature(`user wants to sign up`, () => {

    after(async () => {
        return mongoose.disconnect()
    })

    scenarioOutline(`User registration without the possibility of duplicating the registration of unique information
            Examples:

            | name      | email             | password | status |
            | Daniel    | dandan@gmail.com  | 123      | 201    |
            |           | chico@gmail.com   | a835     | 500    |
            | Ruan      |                   | sdfsdf2  | 500    |
            | Gabriel   | gabriel@gmail.com |          | 500    |
        `, () => {
        let name: string
        let email: string
        let password: string
        let res: any

        given('That the database is empty', async () => {
            return userModel.deleteMany({})
        })

        and('An user intends to sign up with name: <name>, email: <email> and password: <password>', () => {
            name = scenarioOutlineContext.example.name
            email = scenarioOutlineContext.example.email
            password = scenarioOutlineContext.example.password
        })

        when('The user try to sign up', async () => {
            res = await chai.request(app)
                .post('/api/create')
                .send({
                    name: name,
                    email: email,
                    password: password
                })
        })

        then('The api should returns the status: <status>', () => {
            res.status.should.be.equal(scenarioOutlineContext.example.status)
        })
    })

    scenarioOutline(`User registration with the possibility of duplicating the registration of unique information

            Examples:

            | name   | email            | password | status |
            | Ruan   | ruan@gmail.com   | dfklh45  | 201    |
            | Daniel | daniel@gmail.com | hkl543   | 201    |
            | Dan    | dandan@gmail.com | hkl543   | 201    |
            | Dan    | daniel@gmail.com | 123      | 201    |
        `, () => {
        let name: string
        let email: string
        let password: string
        let res: any

        given('That the database is empty', async () => {
            return userModel.deleteMany({})
        })

        and('An user with name: Daniel, email: dandan@gmail.com and password: 123 has already been created', async () => {
            
        })

        and('An other user intend to registrate with the name: <name>, email: <email> and password: <password>', () => {
            name = scenarioOutlineContext.example.name
            email = scenarioOutlineContext.example.email
            password = scenarioOutlineContext.example.password
        })

        when('The new user try to register', async () => {
            res = await chai.request(app)
                .post('/api/create')
                .send({
                    name: name,
                    email: email,
                    password: password
                })
        })

        then('The api shoud returns the status <status>', () => {
            res.status.should.be.equal(scenarioOutlineContext.example.status)
        })
    })
})