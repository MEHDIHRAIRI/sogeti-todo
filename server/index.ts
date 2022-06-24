import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { todoRouter } from './router/todos-router'

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/todo', todoRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
    console.log(`Listening on ${PORT}`)
})

