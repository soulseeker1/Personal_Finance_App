const mongoose = require("mongoose")

const financialAssetSchema = new mongoose.Schema({
  productName: String,
  officialName: String,
  category: String,
  quantity: Number,
  boughtPrice: Number,
  currentPrice: Number,
  broker: String,
})

const FinancialAsset = mongoose.model("FinancialAsset", financialAssetSchema)

module.exports = FinancialAsset
