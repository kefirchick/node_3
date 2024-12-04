const express = require('express');
const { readall } = require('./routes/readall')
const router = express.Router();

router.get('/readall', readall);

router.get('/read', (req, res) => {
    res.send('read');
});

router.post('/create', (req, res) => {
    res.send('create');
});

router.post('/update', (req, res) => {
    res.send('update');
});

router.post('/delete', (req, res) => {
    res.send('delete');
});

module.exports = { router };