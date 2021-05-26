const express = require("express");
require("./db/conn.js");

const store = require("./models/storeModel.js");
const app = express();
const port = process.env.PORT || 3000
require("dotenv").config();

const routerService=require("./router/storeService");
app.use(express.json());   // this is use to get data into json format

app.use("/routerService",routerService);


app.listen(port, () => {
    console.log(`connection is live at port  no. ${port}`);

})
