const express = require('express');
const router = express.Router();

router.get('/readall', (req, res) => {
    res.send('readall');
});

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