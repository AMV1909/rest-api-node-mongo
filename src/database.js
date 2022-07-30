const mongoose = require("mongoose")
require("dotenv").config()

const mongodbConnection = mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB is conected"))
    .catch((error) => console.log(error))

module.exports = mongodbConnection