const express= require("express");
const mongoos=require("mongoose");

const storeShema= new mongoos.Schema({

        name:{
            type: String,
            require:true,
        },

        price:{
            type: Number,
            require: true,
        
        },
        Id:{
            type: Number,
            require: true,
        
        }
 
})


// creating new collection
const store = new mongoos.model("store", storeShema);

// module.exports = store;
module.exports=store;


