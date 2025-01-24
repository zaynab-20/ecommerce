const { where } = require('sequelize');
const { products } = require('../models/products')
const {v4:uuidv4} = require('uuid')

// CRUD OPERATION
// create/post a product
exports.createProducts = async (req, res) => {
    try {
        // const { id } = req.body;
        // const storeWithProduct = await products.create({ where: { id: id } });
        const data = {
            storeId: uuidv4(),
            productName: req.body.productName,
            productQty: req.body.productQty,
            productAmount: req.body.productAmount
        }
        console.log(data);
        
        const newProducts = await products.create(data)
        res.status(201).json({ message: "new products created successfully", newProducts })

    } catch (error) {
        res.status(500).json({ message: 'internal server error' + error.message })
    }
}
// get all product
exports.getAll = async (req, res) => {
    try {
        getProductsInfo = await products.findAll()
        res.status(200).json({ message: 'all the products below' })
    } catch (error) {
        res.status(500).json({ message: "internal server error" + error.message })
    }
}
// get one product

exports.getOne = async (req, res) => {
    try {
        getOneProducts = await products.findByPk(req.params.id)
        if (!getOneProducts) {

            res.status(400).json({ message: 'products not found' })
        }
        res.status(200).json({ message: 'one product info' })

    } catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message })
    }
}
// update a product
exports.updateStore = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        const newInfo = await stores.update({
            storeName: req.body.storeName,
            location: req.body.location
        }, { where: { id: req.params.id } });
        res.status(200).json({ message: "store updated successfully", data: newInfo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// delete a product
exports.deleteOne = async (req, res) => {
    try {
        const product = await products.findByPk(req.params.id)
        if (!product) {
            res.status(400).json({ message: 'products not found' })
        }
        await products.destroy({ where: { id: product.id } })
        res.status(200).json({ message: 'products deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'internal server error', error: error.message })
    }
}







// const {Products} =require("../models/products");
// const {Stores} =require("../models/stores")

// exports.createProduct =async(req,res)=>{
//     try {

//         const data ={
//             id:uuidv4(),
//             StoreId:uuidv4(),
//             ProductName:req.body.ProductName,
//             ProductAmt:req.body.ProductAmt,
//             ProductQty:req.body.ProductQty
//         }
//         const newProduct= await Products.create(data)
//         res.status(201).json({
//             message:`new product created`,
//             data:newProduct
//         })

//     } catch (error) {
//         res.status(500).json({Error:error.message})
//     }
// }

// exports.getAll =async(req,res) =>{
//     try {
//         const allStores=await stores.findAll()
//     } catch (error) {
//         res.status(500).json({message})
//     }
// }



