const express = require('express');
const fs = require('fs/promises');
const { router } = require('./router');

const PORT = 3000;
const PATH_TOP250 = "top250.json"

const app = express();

async function readTop250(path) {
    try {
        const top250String = await fs.readFile(path);

        return JSON.parse(top250String);
    } catch (err) {
        throw new Error(`File reading error: ${err.message}\n${err.stack}`);
    }
}

async function runServer() {
    const top250 = await readTop250(PATH_TOP250);
    
    app.use(express.json());

    app.use('/api/films/', (req, res, next) => {
        req.top250 = top250;
        next();
    });

    app.use('/api/films', router);
    
    app.use((req, res, next) => {
        next({ status: 404, message: 'Not Found' });
    });
    
    app.use((err, req, res, next) => {
        res.status(err.status ?? 500);
        res.json({ error: err.message });
    })
    
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}.`);
    })
}

runServer();