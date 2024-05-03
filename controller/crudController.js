const Person = require("../models/personSchema.js")
const FinancialAsset = require("../models/financialAssetSchema.js")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find a person and populate their financial assets
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.getPersonWithFinancialAssets = async (req, res) => {
  try {
    const { currentUser } = req.body
    const person = await Person.findOne({ Name: currentUser })
    console.log("Person:", person)
    console.log(Person.findOne({ Name: currentUser }))
    res.json(person)
  } catch (error) {
    console.error("Error finding person:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add a new user
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.addNewUser = async (req, res) => {
  try {
    const { newUser, financialAsset } = req.body

    // Check if financialAsset is provided and is not empty
    let financialAssets
    if (financialAsset != null) {
      console.log("not empty financial asset")
      financialAssets = financialAsset
    } else {
      financialAssets = []
    }

    const clientInsert = new Person({
      Name: newUser,
      FinancialAssets: financialAssets,
    })
    const person = await Person.create(clientInsert)
    console.log("Adding new user:", person)
    res.json(person)
  } catch (error) {
    console.error("Error finding person:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Modify stock info
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mongodb = require("mongodb")
// const mongoURI = "mongodb+srv://chiayichenwork:chiayichenwork@cluster0.oujfjtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const dbName = "stock_data" // Replace with your actual database name
// const collectionName = "stock_by_person" // Replace with your actual collection name

// exports.getPersonWithFinancialAssets = async (req, res) => {
//   try {
//     // Create a MongoClient
//     const client = new mongodb.MongoClient(mongoURI, { useUnifiedTopology: true })

//     // Connect to the MongoDB server
//     await client.connect()

//     // Access the database and collection
//     const db = client.db(dbName)
//     const collection = db.collection(collectionName)

//     // Execute the findOne() query
//     const person = await collection.findOne({ Name: "sample" })

//     // Close the connection
//     await client.close()

//     // Check if person exists
//     if (person) {
//       console.log("Person:", person)
//       res.json(person)
//     } else {
//       console.log("Person not found")
//       res.status(404).json({ error: "Person not found" })
//     }
//   } catch (error) {
//     console.error("Error finding person:", error)
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// }
