const mongoose = require('mongoose');


const markSchema= mongoose.Schema({
    courseId: {
        type: String,
        unique:true
    },
    courseName: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }

});

module.exports=mongoose.model('Marks',markSchema);