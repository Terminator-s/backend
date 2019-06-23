const mongoose = require('mongoose');


const adminSchema= mongoose.Schema({
    code: {
        type: String,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
    password: {
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

module.exports=mongoose.model('Admin',adminSchema);