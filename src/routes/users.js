const express = require("express")
const router = express.Router()

const userSchema = require("../models/user")
require("../database")

router.post("/", (req, res) => {
    const user = userSchema(req.body)
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

router.get("/", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

router.put("/:id", (req, res) => {
    const {id} = req.params
    const {name, email, priority} = req.body

    userSchema
        .updateOne({_id: id}, {$set: {name, email, priority}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    userSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router