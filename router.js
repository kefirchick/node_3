const express = require('express');
const { readall } = require('./routes/readall');
const { read } = require('./routes/read');
const router = express.Router();

router.get('/readall', readall);

router.get('/read', read);

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