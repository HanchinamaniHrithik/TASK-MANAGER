require('dotenv').config();
const express = require('express');
const app = express();

const Tasks = require('./Routes/Tasks')
const notFound = require('./MiddleWare/notFound')
const errHandler = require('./MiddleWare/Error-handler')
const connectedDB = require('./Db/Connect')



//middleWare
app.use(express.static('./Public'))
app.use(express.json())

//routes
app.use(notFound)
app.use(errHandler)
app.use('/api/v1/tasks', Tasks)

const port = 3000;


const start = async () => {
    try {
        await connectedDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server Listening on port ${port}... `))
    } catch (error) {
        console.log(error)
    }
}

start()