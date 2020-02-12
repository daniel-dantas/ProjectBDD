import express, { Request, Response, Express, json } from 'express'
import Mongoose from 'mongoose'
import cors from 'cors'

const app: Express = express()
const PORT: number = 8000

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

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my life typescript')
})

app.listen(PORT, () => {
  console.log(`Server is open in port ${PORT}`)
})