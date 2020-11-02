const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const controllers = require('./controllers')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controllers.home.index);

app.get('/movies/location/:location/language/:language', controllers.movies.filter);
app.get('/movies/id/:id', controllers.movies.get);
app.get('/movies/locations', controllers.movies.locations);
app.get('/movies/languages', controllers.movies.languages);

app.post('/users/create', controllers.users.create);

app.post('/booking/create', controllers.bookings.create);
app.post('/booking/delete', controllers.bookings.delete);
app.get('/booking/movieid/:movieid/userid/:userid', controllers.bookings.search);
app.get('/booking/userid/:userid', controllers.bookings.getUserBookings);

const port = process.env.PORT || 5000;
var server = app.listen(port);

console.log('App is listening on port ' + port);

module.exports = server