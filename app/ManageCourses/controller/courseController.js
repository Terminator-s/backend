const Course =require('../model/course');
const mongoose = require('mongoose');

const courseController = function () {

    this.insert = (data) => {
        return new Promise ((resolve,reject) =>{
            const course =new Course ({
                courseId: data.courseId,
                courseName: data.courseName,
                courseYear : data.courseYear,
                courseSemester: data.courseSemester,
                instructors : data.instructors

            });
            course.save().then(() => {
                resolve ( {status :200,message : "Course added"});
            }).catch(err => {
                reject({status : 500,message : err});
            })

        });
    }

    this.getAll = () => {
        return new Promise((resolve,reject) => {
            Course.find().then((data) => {
                resolve({status :200,data:data} )
            }).catch(err =>{
                reject({status:500, message : err })
            })
        })
    }

    this.getById = (id) => {
        return new Promise((resolve,reject) => {
            Course.find({_id :id} ).then((data) => {
                resolve({status :200,data:{instructors:data.instructors}});
            }).catch(err => {
                reject({status:500,message : err});
            });
        });
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Course.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "updated the course"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            Course.remove({_id: id}).then(() => {
                resolve({status: 200, message: "remove the course"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }

}

module.exports = new courseController;