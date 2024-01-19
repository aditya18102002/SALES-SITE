const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({

    productname: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required : true
    },
     
    
},{timestamps:true})

module.exports=mongoose.model('user',saleSchema);
