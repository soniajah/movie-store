var models = require('../models')

exports.auth = (req, res) => {
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
}