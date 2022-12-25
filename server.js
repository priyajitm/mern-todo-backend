const express = require('express')
const connectDatabase = require('./config/db')
const PassportAuth = require('./config/passportConfig')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')

const port = 5000;
const app = express()
app.use(express.json())

connectDatabase()
PassportAuth()

app.use(cors({
    origin: 'http://localhost:3001'
}))
app.use(express.json())
app.use(session({
    secret: 'batman',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/gettasks', require('./routes/getTasks'))
app.use('/addtask', require('./routes/addTask'))
app.use('/update', require('./routes/updateTask'))
app.use('/delete', require('./routes/deleteTask'))
app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))


app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server started successfully on port ${port}`)
})