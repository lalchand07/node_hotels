const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Mongoose is connected to the database");
})

db.on('disconnected', ()=>{
    console.log("Mongoose is disconnected from the database");
})

db.on('error', (err)=>{
    console.log("Mongoose connection error: "+err);
});

module.exports = db;