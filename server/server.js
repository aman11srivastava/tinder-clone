import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import cards from "./dbCards.js";

// App config
const app = express()
const PORT = process.env.PORT || 8001

const CONNECTION_URL = "mongodb+srv://aman:123@cluster0.2gdy1.mongodb.net/tinderdb?retryWrites=true&w=majority"

// Middlewares

app.use(express.json())
app.use(cors())

// DB Config

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(res => {
    console.log('Connected to database successfully!')
})

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => {
    cards.find((err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })

})

// Listeners
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
