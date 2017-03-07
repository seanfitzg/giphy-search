import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from '../webpack.config.dev';
import { favourites } from '../api/favourites'

/* eslint-disable no-console */

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/favourites', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ favourites }));
});

app.post('/api/favourites', (req, res) => {
    favourites.push(req.body);
    res.send(JSON.stringify({ favourites }));
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