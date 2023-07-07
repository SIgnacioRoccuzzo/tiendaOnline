const express = require('express');


const app = express();

app.use(express.json());

app.use('/api', require('./routes/api'));
app.get('/', (req, res) => {
    res.send('hola carola')
})

module.exports = app;