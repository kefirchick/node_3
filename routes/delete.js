const fs = require('fs/promises');

const PATH_TOP250 = "top250.json"

async function filmDelete(req, res, next) {
    if (!isIdValid(req.body.id)) {
        next({ status: 400, message: 'Not A Valid Id' });
    }

    const pos = req.top250.findIndex((film) => {
        return film.id === req.body.id;
    });

    if (pos === -1) {
        next({ status: 404, message: 'No Such Id' });
    }

    res.sendStatus(204);
    req.top250.splice(pos, 1);
    mapPositions(req.top250);
    writeTop250(PATH_TOP250, req.top250)
}

function isIdValid(id) {
    return Number.isInteger(id) && id > 0;
}

function mapPositions(top250) {
    top250.forEach((film, i) => {
        film.position = i + 1;
    });
}

async function writeTop250(path, top250) {
    const stringData = JSON.stringify(top250, null, 4);

    try {
        await fs.writeFile(path, stringData);
    } catch (err) {
        throw new Error(`File writing error: ${err.message}\n${err.stack}`);
    }
}

module.exports = { filmDelete }