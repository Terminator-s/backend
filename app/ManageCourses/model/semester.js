const mongoose = require('mongoose');

const semesterSchema= mongoose.Schema({

    semester:{
        type:Number,
        required:true
    },
    degree:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    enrollmentKey:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Semester',semesterSchema);