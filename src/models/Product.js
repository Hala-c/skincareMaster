const mongoose = require('mongoose')
const pruductSchema = mongoose.Schema(
    {
       name:{
    type:String,
    require:[true,"pls enter product name"]},
     quantity:{
    type:Number,
    require:[true],
    default:0},

    price :{
        type:Number,
        require:true,
        default:0

    },
    Image:{
        type:String,
        require:false,
        },
    },

    {
        timestamps:true,
    }
);

const Product = mongoose.model("Product",pruductSchema)