const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
  productName: String,
  quantity: Number,
  amount: Number,
  totalAmount: Number
});

module.exports = mongoose.model('Sale', SaleSchema);

// ------------------------------------------------------------------------------------

// const mongoose = require("mongoose");

// const saleSchema = new mongoose.Schema({
//     productname: {
//         type: String,
//         required: true
//     },
//     quantity: {
//         type: Number, // or Decimal128 if more precision is needed
//         required: true
//     },
//     amount: {
//         type: Number, // or Decimal128 if more precision is needed
//         required: true
//     }
// }, { timestamps: true });

// module.exports = mongoose.model('Sale', saleSchema);

// ------------------------------------------------------------------------------

// const mongoose = require("mongoose");

// const saleSchema = new mongoose.Schema({

//     productname: {
//         type: String,
//         required: true
//     },
//     quantity: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: String,
//         required : true
//     }
     
    
// },{timestamps:true})

// module.exports=mongoose.model('Sale',saleSchema);
