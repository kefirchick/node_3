const express = require('express');
const { readall } = require('./routes/readall');
const { read } = require('./routes/read');
const { filmDelete } = require('./routes/delete');
const router = express.Router();

router.get('/readall', readall);

router.get('/read', read);

router.post('/create', (req, res) => {
    res.send('create');
});

router.post('/update', (req, res) => {
    res.send('update');
});

router.post('/delete', filmDelete);

module.exports = { router };