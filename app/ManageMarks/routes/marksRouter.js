const express = require('express');
const router = express.Router();
const marksController = require('../controller/marksController');

router.get('/:courseId', (req, res) => {
    marksController.getByCourseId(req.params.courseId).then((marks) => {
        res.status(marks.status).send(marks.marks);
    }).catch(err => {
        res.status(err.status).send({message:err.message});
    })
});

router.get('/', (req, res) => {
    marksController.getAll().then((marks) => {
        res.status(marks.status).send(marks.marks)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.post('/add', (req, res) => {
    marksController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send({message:err.message});
    })
});

router.put('/edit/:courseId', (req, res) => {
    marksController.update(req.params.courseId, req.body).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/delete/:courseId', (req, res) => {
    marksController.delete(req.params.courseId).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;