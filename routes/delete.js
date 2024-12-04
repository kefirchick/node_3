const { isIdValid, mapPositions, writeTop250 } = require('../helper');

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

    req.top250.splice(pos, 1);
    mapPositions(req.top250);
    await writeTop250(req.top250);
    res.sendStatus(204);
}

module.exports = { filmDelete }