const cors =require("cors");
const express=require("express");
const mongoose=require("mongoose");
const dotenv= require("dotenv");

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected"))
.catch(err=>console.log("error while connecting",err))

app.use("/api/auth",require("./routes/auth_routes"));

app.listen(process.env.PORT,()=>{
console.log(`Server is listing on PORT: ${process.env.PORT}`);})