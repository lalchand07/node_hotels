const express = require('express');
const Menu = require('./../Models/Menu');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const response = await Menu.find();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.post('/add',async (req,res)=>{
    try {
        const menuData = req.body;
        const newMenu = new Menu(menuData);
        const response = await newMenu.save();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const menuId = req.params.id;
        const response = await Menu.findById(menuId);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

module.exports = router;