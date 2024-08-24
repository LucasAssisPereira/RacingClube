import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { CLIENT_URL, NODE_ENV, PORT } from './config/getEnv'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}))
app.use(cookieParser())

app.get('/api/healthcheck', (req, res) => {
  return res.status(200).json({ message: 'Healthy' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${NODE_ENV} environment 🔥`)
})
