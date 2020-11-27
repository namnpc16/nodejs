const express = require('express');
const db = require('../connect/db');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('port index')
    // res.json('port index')
    db.get().collection('collection').find({}).toArray()
    .then((users) => {
        console.log('Users', users)
    })
});

router.get('/:id', (req, res) => {
    res.send(req.params.id)
});

router.post('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;