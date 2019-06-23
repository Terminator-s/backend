const mongoose = require('mongoose');
const Admin = require('../model/admin');

const adminController = function () {
    this.insert = (admin) => {
        return new Promise((resolve, reject) => {
            const newAdmin = new Admin({
                code: admin.code,
                name: admin.name,
                username: admin.username,
                password: admin.password,
                email:admin.email,
                address:admin.address,
                phone:admin.phone
            });

            newAdmin.save().then(() => {
                resolve({status: 200, message: "Added new Admin"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.getByCode = (code) => {
        return new Promise((resolve, reject) => {
            Admin.find({code: code}).exec().then((admins) => {
                resolve({status: 200, admins: admins})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            Admin.find().exec().then((admins) => {
                resolve({status: 200, admins: admins})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (code, data) => {
        return new Promise((resolve, reject) => {
            Admin.update({code: code}, data).then(() => {
                resolve({status: 200, message: "updated Admin"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    };

    this.delete = (code) => {
        return new Promise((resolve, reject) => {
            Admin.remove({code: code}).then(() => {
                resolve({status: 200, message: "removed Admin"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};

module.exports = new adminController();