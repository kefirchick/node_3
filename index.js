const express = require('express');
const { router } = require('./router');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/films/', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
})