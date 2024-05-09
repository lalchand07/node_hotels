const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
     name: {
         type: String,
         required: true,
         minlength: 1,
         trim: true
     },
     age: {
         type: Number,
         required: true,
         minlength: 1,
         trim: true
     },
     work: {
         type: String,
         required: true,
         minlength: 1,
         trim: true,
         enum: [
            'Chef',
            'Owner',
            'Waiter',
            'Manager'
         ]
     },
     mobile: {
         type: String,
         required: true,
         minlength: 10,
         trim: true,
         unique: true
     },
     email:{
         type: String,
         required: true,
         minlength: 1,
         trim: true,
         unique: true
     },
     address: {
         type: String,
         required: true,
         minlength: 1,
         trim: true
     },
     salary:{
         type: Number,
         required: true,
         minlength: 1,
         trim: true
     }
})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;