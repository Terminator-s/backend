const mongoose = require('mongoose');


const noticeSchema= mongoose.Schema({
    id: {
        type: String,
        required:true,
        unique:true
    },
    description: {
        type: String,
        required:true
    },

});

module.exports=mongoose.model('Notice',noticeSchema);