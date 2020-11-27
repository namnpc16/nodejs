const dns = require('dns');
const express = require('express');
const app = express();

app.get('/get', (req, res) => {
    // res.sendFile(__dirname + '/index.html', {url: req.url})
    // res.send(req.params.userId);
    res.redirect('/hello');
});

app.get('/hello', (req, res) => {
    // res.send(req.params.userId)
    res.send('adfas')
});

app.listen(9999, () => {
    console.log('listening port 9999...');
});