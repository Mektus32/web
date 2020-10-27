const express = require('express')

const app = express();
app.use('/public', express.static('public'))

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/template/about.html');
});

app.get('/math', function(req, res) {
    res.sendFile(__dirname + '/template/math.html');
});

app.listen(9999);