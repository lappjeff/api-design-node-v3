import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api', router)

const log = (req, res, next) => {
  console.log('logging')
  next()
}

router.get('/me', (req, res) => {
  res.send({ me: 'jeff' })
})

app.get('/data', [log, log], (req, res) => {
  res.send({ message: 'hello' })
})

app.put('/data', (req, res) => {})

app.delete('/data', (req, res) => {})

app.post('/data', (req, res) => {
  res.send({ ok: true })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
