const express=require("express");
const {addsale,} = require("../controllers/addsale");

const router =express.Router();

router.post('/addsale',addsale);

module.exports=router;