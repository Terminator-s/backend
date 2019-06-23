const express = require('express');
const router = express.Router();
const instructorController = require('../controller/instructorController');

router.get('/:code', (req, res) => {
    instructorController.getByCode(req.params.code).then((instructors) => {
        res.status(instructors.status).send(instructors.instructors)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.get('/', (req, res) => {
    instructorController.getAll().then((instructors) => {
        res.status(instructors.status).send({data:instructors.instructors})
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.post('/add/', (req, res) => {
    instructorController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.put('/edit/:code', (req, res) => {
    instructorController.update(req.params.code, req.body).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/delete/:code', (req, res) => {
    instructorController.delete(req.params.code).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;