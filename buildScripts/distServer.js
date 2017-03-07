import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3040;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use('/templates', express.static(path.join(__dirname, '../src/templates')))

app.get('*', function(req, res) {
    res.redirect('/');
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});