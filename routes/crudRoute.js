const express = require("express")
const router = express.Router()

const { getPersonWithFinancialAssets, addNewUser } = require("../controller/crudController")

router.route("/getPersonWithFinancialAssets").get(getPersonWithFinancialAssets)

router.route("/addNewUser").post(addNewUser)

module.exports = router
