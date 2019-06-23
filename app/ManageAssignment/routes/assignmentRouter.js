const express = require('express');
const router = express.Router();
const Controller = require('../controller/assignmentController');

router.get('/',(req,res) => {
    Controller.getAll().then((data) => {
        res.status(data.status).send({message:data.data});
    }).catch(err =>{
        res.status(err.status).send({message:err.message})
    });
});

router.get('/:id',(req,res) => {
    Controller.getById(req.params.id).then((data) => {
        res.status(data.status).send({message:data.data});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
});

router.post('/',(req,res)=>{
    Controller.insert(req.body).then((data) =>{
        res.status(data.status).send({message:data.message});
    }).catch(err =>{
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id', (req, res) => {
    Controller.update(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/:id', (req, res) => {
    Controller.delete(req.params.id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports =router;