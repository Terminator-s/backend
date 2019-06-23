const mongoose = require('mongoose');
const Instructor = require('../../ManageAdmin/model/instructor');
//const soft_delete = require('mongoose-delete');

const assignmentSchema= mongoose.Schema({

    assignmentId:{
        type:String,
        required:true
    },

    assModulesName:{
        type:String,
        required:true
    },

    assModulesCode:{
        type:String,
        required:true
    },

    assCourseYear:{
        type:String,
        required:true
    },

    assCourseSemester:{
        type:String,
        required:true
    },

    Instructor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Instructor'
        }
    ],

    assTopic:{
        type:String,
        required:true
    },

    assDescription:{
        type:String,
        required:true
    },

    assDueDate:{
        type:String,
        required:true
    },

    assDueTime:{
        type:String,
        required:true
    },

});

//courseSchema.plugin(soft_delete);

module.exports=mongoose.model('Assignment',assignmentSchema);