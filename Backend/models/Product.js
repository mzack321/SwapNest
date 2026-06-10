

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
image:String,about:String,contact:String,
address:String,productName:String,userId:String,userName:String
});
module.exports=mongoose.model("Product",productSchema);