import express, { Request, Response, Express, json } from 'express'
import Mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const app = express()

Mongoose.connect('mongodb://localhost/projectbdd',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Mongodb server running')
}).catch( err => {
  console.log(`Error running server: ${err}`)
})

app.use(cors())
app.use(json())

app.use('/api', routes)

export default app