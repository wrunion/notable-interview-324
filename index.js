// require('dotenv').config()
const express = require('express')
require('express-async-errors')
// const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const { PORT, URLENCODED } = require('./constants')
const app = express()

app.use(express.urlencoded(URLENCODED))
app.use(express.json())
app.use(cookieParser())

app.use('/', require('./routes'))

app.listen(PORT, () => console.log(`Server is ready at port ${PORT}`))