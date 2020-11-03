const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const controllers = require('./controllers')
var session = require('express-session');
var models = require('./models')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'test',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/auth', function(req, res) {
	var name = req.body.name;
  var password = req.body.password;
  console.log(req.body)
	if (name && password) {
    models.db.user.find({name: name, password: password}, (err, results) => {  
      if(err) console.log(err)
      console.log(results)  
			if (results.length > 0) {
				req.session.loggedin = true;
        req.session.user = {name: results[0].name, id: results[0]._id}
        res.send({loggedin: true, name: results[0].name, id: results[0]._id})
      } 
      else {
				res.send('Incorrect name and/or Password!');
			}			
			res.end();
		})
	} else {
		res.send('Please enter name and Password!');
		res.end();
	}
});

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