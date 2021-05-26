const mongoose =require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/store",{          
    useCreateIndex:true,  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log(" connection is successfull");
    
}).catch((e) =>{
    console.log("No connection");
})

