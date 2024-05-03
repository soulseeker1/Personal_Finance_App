const express = require("express")
const app = express()
const PORT = 3000

const server = app.listen(PORT, () => {
  //keep this app.listen in a const called server to handle it
  console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

//Setting up of database connection with MongoDB
const connectMongoDB = require("./database/mongodb.js") // Importing Database for connection

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const task = require("./routes/crudRoute")

app.use(task)
