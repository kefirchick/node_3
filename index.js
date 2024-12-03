const express = require('express');
const { router } = require('./routes');
const app = express();

const PORT = 3000;

app.use('/api/films/', router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
})