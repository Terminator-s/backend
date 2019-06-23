const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.get('/:code', (req, res) => {
    adminController.getByCode(req.params.code).then((admins) => {
        res.status(admins.status).send(admins.admins)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.get('/getAll', (req, res) => {
    adminController.getAll().then((admins) => {
        res.status(admins.status).send(admins.admins)
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.post('/add/', (req, res) => {
    adminController.insert(req.body).then((data) => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send({message:err.message})
    })
});

router.put('/edit/:code', (req, res) => {
    adminController.update(req.params.code, req.body).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/delete/:code', (req, res) => {
    adminController.delete(req.params.code).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;