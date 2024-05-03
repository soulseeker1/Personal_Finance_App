const mongoose = require("mongoose")

const DB_NAME = "stock_data" // Specify the name of your database

mongoose
  .connect(`mongodb+srv://chiayichenwork:chiayichenwork@cluster0.oujfjtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "stock_data", // Specify the database name
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })
