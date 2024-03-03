const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sale_controller = require('./controllers/sale_controller');
const auth_routes = require('./routes/auth_routes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.log(err);
//     }
// })();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected"))
.catch(err=>console.log("error while connecting",err))

// Routes
app.use('/sales', sale_controller);
app.use('/auth', auth_routes);

// Start server
app.listen(5000, () => console.log('Server started on port 5000'));



// const cors =require("cors");
// const express=require("express");
// const mongoose=require("mongoose");
// const dotenv= require("dotenv");

// dotenv.config();
// const app=express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("connected"))
// .catch(err=>console.log("error while connecting",err))

// app.use("/api/auth",require("./routes/auth_routes"));
// app.use("/api/Sale",require("./routes/addsale_routes"));

// app.listen(process.env.PORT,()=>{
// console.log(`Server is listing on PORT: ${process.env.PORT}`);})