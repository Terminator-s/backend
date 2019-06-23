const mongoose = require('mongoose');
const notice = require('../model/notice');

const noticeController = function () {
    this.insert = (notice) => {
        return new Promise((resolve, reject) => {
            const newNotice = new notice({
                id: notice.id,
                description: notice.description
            });

            newNotice.save().then(() => {
                resolve({status: 200, message: "Added new notice"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            notice.find({id: id}).exec().then((notice) => {
                resolve({status: 200, notices: notice})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            notice.find().exec().then((notice) => {
                resolve({status: 200, notices: notice})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            notice.update({id: id}, data).then(() => {
                resolve({status: 200, message: "updated notice"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            notice.remove({id: id}).then(() => {
                resolve({status: 200, message: "removed notice"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};

module.exports = new noticeController();