const express = require('express');
const { router } = require('./router');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/films/', router);

app.use((req, res, next) => {
    next({status: 404, message: 'Not Found'});
});

app.use((err, req, res, next) => {
    res.status(err.status).json({error: err.message});
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
})