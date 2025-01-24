const storeModel = require("../models/stores");
const {v4:uuidv4} = require('uuid')

exports.createUser = async (req, res) => {
    try {
        const data = {
            id: uuidv4(),
            storeName: req.body.storeName,
            location: req.body.location,
            email: req.body.email
        }
        const createUserInfo = await storeModel.create(data);
        
        res.status(201).json({ message: "New store created successfully", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}


exports.getAll = async (req, res) => {
    try {
        const createUserInfo = await storeModel.findAll();
        res.status(201).json({ message: "all the students below", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.getOne = async (req, res) => {
    try {
        const store = await storeModel.findByPk(req.params.id);
        if (!store) {
            return res.status(400).json({ message: 'store not found' });
        }
        const createUserInfo = await storeModel.findByPk(req.params.id);
        res.status(201).json({ message: " students with the below id", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.updateStore = async (req, res) => {
    try {
        const store = await storeModel.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        const newInfo = await storeModel.update({
            storeName: req.body.storeName,
            location: req.body.location
        }, { where: { id: req.params.id } });
        res.status(200).json({ message: "store updated successfully", data: newInfo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.deleteStore = async (req, res) => {
    try {
        const store = await storeModel.findByPk(req.params.id);
        if (!store) {
            return res.status(400).json({ message: 'store not found' });
        }
        await storeModel.destroy({ where: { id: store.id } });
        res.status(200).json("store deleted successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}









// const Stores = require("../models/stores")

// const { v4: uuidv4 } = require("uuid")
// exports.createStore = async (req, res) => {

//     try {
//         const data = {
//             id: uuidv4(),
//             StoreName: req.body.StoreName,
//             location: req.body.location,
//             email: req.body.email
//         }

//         const newStores = await Stores.create(data);
//         // const storeExists = await Stores.findOne({ where: { email: email } });
//         // if (storeExists) {
//         //     return res.status(400).json({
//         //         message: `Store with Email: ${email} already exists`
//         //     });
//         // };
//         // const newStores = await Stores.create(data);

//         res.status(201).json({
//             message: `new store created`,
//             data:newStores
//         })

//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// const sequelize = require("sequelize")
// exports.getAll = async (req, res) => {
//     try {
//         const allUser = sequelize.query("SELECT * FROM Stores");
//         res.status(200).json({ message: `kindly find the below all stores`, "total number of stores": allUser })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// exports.getOne = (req, res) => {
//     try {
//         const Store = Stores.findByPK(req.params.id);
//         if (!Stores) {
//             return res.status(400).json({message:"store not found"})
//         }
//     } catch (error) {

//         res.status(500).json({ error: error.message })
//     }
// }

// exports.updateUser = async (req, res) => {

//     try {
//         const updateUser = Stores.findByPK(req.params.id)

//         if (!Sore) {
//             return
//         }
//         res.status(200).json({ message: `kindly check for the update store below` })
//     } catch (error) {
//         res.status(500).json({ message: `unable to update user` })
//     }

// }

