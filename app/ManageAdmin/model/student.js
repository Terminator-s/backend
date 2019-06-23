const mongoose = require('mongoose');


const studentSchema= mongoose.Schema({
    id: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    year: {
        type: String,
        required:true
    },
    semester: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required:true
    }

});

module.exports=mongoose.model('Student',studentSchema);