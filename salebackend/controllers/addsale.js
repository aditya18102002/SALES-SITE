
const User = require('../user_model/add_sale');
const dotenv = require('dotenv').config();

const addsale = async (req, res) => {
    try {
        // get data from request body
        const { productname, quantity, amount } = req.body;

        if (!productname || !quantity || !amount) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // create a new sale record
        const newSale = new User({
            productname,
            quantity,
            amount
        });

        // save the new sale record
        const savedSale = await newSale.save();

        res.status(201).json({
            message: "Sale added successfully",
            sale: savedSale
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while adding sale",
            error: error.message
        });
    }
};

module.exports = {
    addsale
};




// const User = require('../user_model/add_sale');
// // const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv').config();


// const addsale = async (req, res) => {

//     try {
//         //get data from request body
//         const { productname, quantity, amount } = req.body;
//         if (!productname || !quantity || !amount) {
//             return res.status(400).json({
//                 massage: "all field are required"
//             })
//         }
//         //check email will be unique
//         // let user = await User.findOne({ email });
//         // if (user) {
//         //     return res.status(400).json({
//         //         massage: "user already registered with this email"
//         //     })
//         // }
//         const resp = await newUser.save();
//         res.status(201).json({ massage: "sale added succesful", resp })
//     } catch (error) {
//         res.status(500).json({ massage: "error occured while registration", error })

//     }
//     module.exports = {
//         addsale
//     }
// }