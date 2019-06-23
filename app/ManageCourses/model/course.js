const mongoose = require('mongoose');
const Instructor = require('../../ManageAdmin/model/instructor');
//const soft_delete = require('mongoose-delete');

const courseSchema= mongoose.Schema({

    courseId:{
        type:String,
        required:true
    },

    courseName:{
        type:String,
        required:true
    },

    courseYear:{
        type:String,
        required:true
    },

    courseSemester:{
        type:String,
        required:true
    },

    instructors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Instructor'
        }
    ],

    confirmed:{
        type:Boolean
    }


});

//courseSchema.plugin(soft_delete);

module.exports=mongoose.model('Course',courseSchema);