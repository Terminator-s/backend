const mongoose = require('mongoose');
const Marks = require('../model/marks');

const MarksController = function () {
    this.insert = (marks) => {
        return new Promise((resolve, reject) => {
            const newMarks = new Marks({
                courseId: marks.courseId,
                courseName: marks.courseName,
                marks: marks.marks
            });

            newMarks.save().then(() => {
                resolve({status: 200, message: "Added new Mark"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err});
            })
        })
    };

    this.getByCourseId = (courseId) => {
        return new Promise((resolve, reject) => {
            Marks.find({courseId: courseId}).exec().then((marks) => {
                resolve({status: 200, marks: marks})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            Marks.find().exec().then((marks) => {
                resolve({status: 200, marks: marks})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (courseId, data) => {
        return new Promise((resolve, reject) => {
            Marks.update({courseId: courseId}, data).then(() => {
                resolve({status: 200, message: "updated Marks"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    };

    this.delete = (courseId) => {
        return new Promise((resolve, reject) => {
            Marks.remove({courseId: courseId}).then(() => {
                resolve({status: 200, message: "removed marks"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};

module.exports = new MarksController();