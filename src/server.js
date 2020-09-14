const express = require('express');
const path = require('path');

const distPath = path.join(__dirname, '../dist');

console.log(distPath);

const port = 5000;
const app = express();

app.use(express.static(distPath));

app.get('/message', (req, res) => {
    res.send('SHHHHHHHH... this is a secret message');
})

app.listen(port, () => {
    console.log(`Listening is up on port ${port}`);
})