import express from 'express'

import userController from './controllers/user'

const routes = express.Router()

routes.post('/create', userController.create)

export default routes