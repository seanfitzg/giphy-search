/*eslint-disable no-console */
import open from 'open';
import express from 'express';
import { favourites } from '../api/favourites'
import bodyParser from 'body-parser';
import path from 'path';

function start(app, port) {

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
}

export default start;