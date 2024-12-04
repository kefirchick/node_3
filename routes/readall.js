const fs = require('fs/promises');

const PATH_TOP250 = "top250.json"

async function readall(req, res, next) {
    try {
        const top250String = await fs.readFile(PATH_TOP250);
        const top250JSON = JSON.parse(top250String);
        res.send(top250JSON);
    } catch (err) {
        next (err);
    }
}

module.exports = { readall }