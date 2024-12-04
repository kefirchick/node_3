const fs = require('fs/promises');

const PATH_TOP250 = "top250.json"

async function read(req, res, next) {
    if (!isIdValid(req.body.id)) {
        next({ status: 400, message: 'Not A Valid Id' });
    }

    const film = req.top250.find((film) => {
        return film.id === req.body.id;
    })

    if (!film) {
        next({ status: 404, message: 'No Such Id' });
    }

    res.json(film);
}

function isIdValid(id) {
    return Number.isInteger(id) && id > 0;
}

module.exports = { read }