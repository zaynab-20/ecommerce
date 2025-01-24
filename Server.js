const router = require("./Router/StoreRouter")
const PORT =4040
const express = require("express")

const app =express()
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log("app is running on port "+PORT)
})