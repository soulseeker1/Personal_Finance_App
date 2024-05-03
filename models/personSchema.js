const mongoose = require("mongoose")

const personSchema = new mongoose.Schema(
  {
    Name: String,
    FinancialAssets: [
      {
        productName: String,
        officialName: String,
        category: String,
        quantity: Number,
        boughtPrice: Number,
        currentPrice: Number,
        broker: String,
      },
    ],
  },
  { collection: "stock_by_person" }
)

const Person = mongoose.model("Person", personSchema)

module.exports = Person
