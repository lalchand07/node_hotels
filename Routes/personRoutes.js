const express = require('express');
const Person = require('./../Models/Person');

const router = express.Router();


router.post('/', async (req, res) => {
    try {

        const personData = req.body;
        const newPerson = new Person(personData);
        const response = await  newPerson.save();

        console.log("Data Saved.");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }

})

router.get('/', async (req, res) => {
    try {
      
        const response = await Person.find();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findById(personId);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.put('/:id',async (req, res)=>{
    try {
        const personId = req.params.id;
        const personData = req.body;
        const response = await Person.findByIdAndUpdate(personId, personData, {
            new: true,
            runValidators: true
        });

        if(!response){
            return res.status(404).json({error:"Person not found"});
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.delete('/:id',async (req, res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        res.status(200).json(response);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

module.exports = router;