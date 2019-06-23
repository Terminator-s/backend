const mongoose = require('mongoose');

//const soft_delete = require('mongoose-delete');

const degreeSchema= mongoose.Schema({

    degreeName:{
        type:String,
        required:true
    },

    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Course'
        }
    ]


});

//degreeSchema.plugin(soft_delete);
module.exports=mongoose.model('Degree',degreeSchema);