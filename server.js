const express = require('express')
const connectDatabase = require('./config/db')

const port = 5000
const app = express()
app.use(express.json())

connectDatabase()

app.use('/gettasks', require('./routes/getTasks'))
app.use('/addtask', require('./routes/addTask'))
app.use('/update', require('./routes/updateTask'))
app.use('/delete', require('./routes/deleteTask'))


app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server started successfully on port ${port}`)
})