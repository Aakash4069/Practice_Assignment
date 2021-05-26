const express = require("express");
const router= express.Router(); 

const store=require("../models/storeModel");

router.get("/first", async (req, res) => {
    res.send("hello from Aakash");
})

// to insert the data into the list.


// to display the all items in the list 
router.get("/store", async (req, res) => { 

    try {  
        const getItems = await store.find({});
        // console.log(req.body);
        res.send(getItems);
        // const insetItems = await addingItems.save();
        // res.status(201).send(insetItems);

    } catch (e) {
        res.status(400).send(e);
    }
})

// it will display items on the basis of the input name
// to Search the items on the basis of item name
router.get("/store/:name", async (req, res) => {

    try {
        let name=req.params.name;
        const getsingalItem = await store.find({"name":name});
        console.log(req.body);
        res.send(getsingalItem);
        
    } catch (e) {
        res.status(400).send(e);
    }
})

// display the name by the id
router.get("/store/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const getItemByID = await store.findById(_id);
        console.log(req.body);
        res.send(getItemByID);

    } catch (e) {
        res.status(400).send(e);
    }
})

// add data into list 3000
router.post("/store", async (req, res) => {
    router
    try {
        const addingItems = new store(req.body);
        console.log(req.body);
        const insetItems = await addingItems.save();
        res.status(201).send(insetItems);

    } catch (e) {
        res.status(400).send(e);
    }
})

// updating list by inseting new data
router.patch("/store/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const updateItemByID = await store.findByIdAndUpdate(_id,req.body,{new: true});
        
        console.log(req.body);
        res.send(updateItemByID);
        
    } catch (e) {
        res.status(500).send(e);
    }
})

// updating the particular items  
router.patch("/store/:name", async (req, res) => {

    try {
        let name=req.params.name;
        const updateItemByName = await store.findByIdAndUpdate(name,req.body,{new : true });
        console.log(req.body);
        res.send(updateItemByName);
       
    } catch (e) {
        res.status(500).send(e);
    }
})

// delelting the Item
router.delete("/store/:id", async (req, res)=> {

    try {
        let _id=req.params.id;
        const deleteItem = await store.findByIdAndDelete(_id);
        res.send(deleteItem);
       
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports=router;