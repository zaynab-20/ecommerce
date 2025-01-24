const { createProducts } = require("../Controllers/productController")

const router = require("express").Router()

router.post("/products", createProducts)

// router.get("/Stores", getAll)

// router.get("/Stores/:id", getOne)


module.exports = router