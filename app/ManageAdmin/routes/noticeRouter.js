const express = require('express');
const router = express.Router();
const noticeController = require('../controller/noticeController');

router.get('/:id', (req, res) => {
    noticeController.getById(req.params.code).then((notices) => {
        res.status(notices.status).send(notices.notices)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.get('/getAll', (req, res) => {
    noticeController.getAll().then((notices) => {
        res.status(notices.status).send(notices.notices)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.post('/add/', (req, res) => {
    noticeController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.put('/edit/:id', (req, res) => {
    noticeController.update(req.params.id, req.body).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/delete/:id', (req, res) => {
    noticeController.delete(req.params.id).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;