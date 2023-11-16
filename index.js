const express = require('express')
const app = express()

app.use(express.json())

let phonebooks = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons/', (req, res) => {
    res.json(phonebooks)
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has infor for ${phonebooks.length} people </p><br/><p>${new Date()}</p>`)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})