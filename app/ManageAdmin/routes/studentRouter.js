const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/:id', (req, res) => {
    studentController.getById(req.params.code).then((students) => {
        res.status(students.status).send(students.students)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.get('/getAll', (req, res) => {
    studentController.getAll().then((students) => {
        res.status(students.status).send(students.students)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.post('/add/', (req, res) => {
    studentController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.put('/edit/:id', (req, res) => {
    studentController.update(req.params.id, req.body).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/delete/:id', (req, res) => {
    studentController.delete(req.params.id).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;