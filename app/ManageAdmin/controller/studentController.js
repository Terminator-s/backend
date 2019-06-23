const mongoose = require('mongoose');
const Student = require('../model/student');

const studentController = function () {
    this.insert = (student) => {
        return new Promise((resolve, reject) => {
            const newStudent = new Student({
                id: student.id,
                password: student.password,
                year: student.year,
                semester: student.semester,
                email: student.email,
                address: student.address,
                phone: student.phone

            });

            newStudent.save().then(() => {
                resolve({status: 200, message: "Added new Student"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            Student.find({id: id}).exec().then((student) => {
                resolve({status: 200, students: student})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            Student.find().exec().then((student) => {
                resolve({status: 200, students: student})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Student.update({id: id}, data).then(() => {
                resolve({status: 200, message: "updated Student"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            Student.remove({id: id}).then(() => {
                resolve({status: 200, message: "removed Student"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};

module.exports = new studentController();