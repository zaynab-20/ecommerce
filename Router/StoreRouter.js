const {getAll, getOne, createUser} =require("../Controllers/StoreController")

const router = require("express").Router()

router.post("/Stores", createUser)

router.get("/Stores", getAll)

router.get("/Stores/:id", getOne)

// router.patch("/Stores/:id", updateStore)

module.exports = router