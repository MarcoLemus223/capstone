const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const { getAnswer, getQuestion } = require('./controller')

app.get('/api/answer', getAnswer )
app.post('/api/question', getQuestion )


app.listen(5500, () => console.log('Server running on 5500'))