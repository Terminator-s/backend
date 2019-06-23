const Assignment =require('../model/Assignments');
const mongoose = require('mongoose');

const assignmentController = function () {

    this.insert = (data) => {
        return new Promise ((resolve,reject) =>{
            const assignment =new Assignment ({
                assignmentId: data.assignmentId,
                assModulesName: data.assModulesName,
                assModulesCode : data.assModulesCode,
                assCourseYear: data.assCourseYear,
                assCourseSemester : data.assCourseSemester,
                instructors : data.instructors,
                assTopic: data.assTopic,
                assDescription : data.assDescription,
                assDueDate: data.assDueDate,
                assDueTime : data.assDueTime

            });
            assignment.save().then(() => {
                resolve ( {status :200,message : "Assignment added"});
            }).catch(err => {
                reject({status : 500,message : err});
            })

        });
    }

    this.getAll = () => {
        return new Promise((resolve,reject) => {
            Assignment.find().then((data) => {
                resolve({status :200,data:data} )
            }).catch(err =>{
                reject({status:500, message : err })
            })
        })
    }

    this.getById = (id) => {
        return new Promise((resolve,reject) => {
            Assignment.find({_id :id} ).populate('Instructor').then((data) => {
                resolve({status :200,data:{instructors:data.instructors}});
            }).catch(err => {
                reject({status:500,message : err});
            });
        });
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Assignment.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "updated the assignment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            Assignment.remove({_id: id}).then(() => {
                resolve({status: 200, message: "remove the assignment"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }

}

module.exports = new assignmentController;