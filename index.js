require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))

const mongoose = require('mongoose')

const url =
  `mongodb+srv://fullstackPart3:${password}@cluster0.4qd2h.mongodb.net/phonebook?retryWrites=true&w=majority`

morgan.token('body', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  else {
    return null
  }
})

{
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})


app.get('/api/persons', (request, response) => {
    
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

app.get('/info', (request, response) => {
    const info = `Phonebook has information of <b>${persons.length}</b> people.`
    const time = Date()
    response.send(`<p>${info}</p><p>${time}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } 
    else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
      return response.status(400).json({
        error: 'The name or number is missing'
      })
    }
    if (!persons.every(p => p.name !== body.name)) {
      return response.status(400).json({
          error: 'The name already exists in the phonebook'
      })
    }
    

    const person = {
        id: Math.floor(Math.random() * 5000),
        name: body.name,
        number: body.number,
    }
    
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
}