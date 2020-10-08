const express = require('express')
const app = express()
{
let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-1",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
    const info = `Phonebook has information of <b>${persons.length}</b> people.`
    const time = Date()
    res.send(`<p>${info}</p><p>${time}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
}