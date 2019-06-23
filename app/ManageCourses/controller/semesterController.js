const Semester =require('../model/Semester');


const semesterController = function () {

    this.insert = (data) => {
        return new Promise ((resolve,reject) =>{
            const semester =new Semester ({
                semester: data.semester,
                degree: data.degree,
                enrollmentKey : data.enrollmentKey

            });
            semester.save().then(() => {
                resolve ( {status :200,message : "semester added"});
            }).catch(err => {
                reject({status : 500,message : err});
            });

        });
    }

    this.getById = (id) => {
        return new Promise((resolve,reject) => {
            Semester.findById({_id :id} ).then((data) => {
                resolve({status :200,data:{enrollmentKey:data.enrollmentKey}});
            }).catch(err => {
                reject({status:500,message : err});
            });
        });
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Semester.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "updated the semester"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }



}

module.exports = new semesterController;