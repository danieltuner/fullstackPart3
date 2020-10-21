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


morgan.token('body', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  else {
    return null
  }
})

{


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

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(person)
        }
        else {
          response.status(404).end()
        }
      })
    
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
  })

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
      return response.status(400).json({
        error: 'The name is missing'
      })
    }
    if (body.number === undefined) {
      return response.status(400).json({
        error: 'The number is missing'
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