const Degree =require('../model/degree');


const degreeController = function () {

    this.insert = (data) => {
        return new Promise ((resolve,reject) =>{
            const degree =new Degree ({
                degreeName: data.degreeName,
                courses : data.courses

            });
            degree.save().then(() => {
                resolve ( {status :200,message : "Degree added"});
            }).catch(err => {
                reject({status : 500,message : err});
            })

        });
    }

    this.getAll = () => {
        return new Promise((resolve,reject) => {
            Degree.find().then((data) => {
                resolve({status :200,data:data} )
            }).catch(err =>{
                reject({status:500, message : err })
            })
        })
    }

    this.getById = (id) => {
        return new Promise((resolve,reject) => {
            Degree.findOne({_id :id} ).populate('course').then((data) => {
                resolve({status :200,data:{courses:data.courses}});
            }).catch(err => {
                reject({status:500,message : err});
            });
        });
    }

  /*  this.disable = (id)=>{
        return new Promise((resolve,reject) =>{
            Degree.delete({_id:id}).then(()=>{
                resolve({status:200,message:'Deleted the degree'});
            }).catch(err=>{
                reject({status:500,message:err});
            });
        });
    }

    this.enable=(id) => {
        return new Promise((resolve,reject) =>{
            Degree.restore({_id: id}).then(()=>{
                resolve({status:200,message:'Restored the degree'});
            }).catch(err=>{
                reject({status:500,message:err});
            });
        });

    }*/

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            Degree.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "updated the degree"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            Degree.remove({_id: id}).then(() => {
                resolve({status: 200, message: "deleted the degree"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new degreeController;