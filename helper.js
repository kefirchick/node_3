const fs = require('fs/promises');

const PATH_TOP250 = "top250.json"

async function readTop250() {
    try {
        const top250String = await fs.readFile(PATH_TOP250);

        return JSON.parse(top250String);
    } catch (err) {
        throw new Error(`File reading error: ${err.message}\n${err.stack}`);
    }
}

async function writeTop250(top250) {
    const stringData = JSON.stringify(top250, null, 4);

    try {
        await fs.writeFile(PATH_TOP250, stringData);
    } catch (err) {
        throw new Error(`File writing error: ${err.message}\n${err.stack}`);
    }
}

function mapPositions(top250) {
    top250.forEach((film, i) => {
        film.position = i + 1;
    });
}

function isIdValid(id) {
    return Number.isInteger(id) && id > 0;
}

module.exports = {
    readTop250,
    writeTop250,
    mapPositions,
    isIdValid
}