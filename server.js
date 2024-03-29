const express = require('express');

const app = express();

const port = 3000;

console.log('pre-start');

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
