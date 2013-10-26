var mongo = require('mongodb'),
	dbName = 'modernWebDevLabs',
	employeesCollection = 'employees';

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db(dbName, server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to '" + dbName + "' database");
        db.collection(employeesCollection, {strict:true}, function(err, collection) {
            console.log("Connected to the collection: '" + employeesCollection + "'");
            eraseCollection();
            populateCollection();
        });
    }
});

exports.query = function(req, res) {
	db.collection(employeesCollection, function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
}

exports.get = function(req, res) {
	var id = req.params.id;
	console.log("Retrieving employee with ID#: " + id);
	db.collection(employeesCollection, function(err, collection) {
		collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
        });
	});
}

exports.update = function(req, res) {
	var id = req.params.id,
		employee = req.body;
	console.log("Updating employee#: " + id);
	console.log(JSON.stringify(employee));
	db.collection(employeesCollection, function(err, collection) {
		collection.update({'_id':new BSON.ObjectID(id)}, employee, {safe:true}, function(err, result) {
			if(err) {
				console.log('Error updating employee: ' + err);
				res.send({'error':'An error has occurred'});
			} else {
				console.log('' + result + ' documents(s) updated');
				res.send(employee);
			}
		})
	});
}

exports.create = function(req, res) {
	var employee = req.body;
	console.log("Adding employee: " + JSON.stringify(employee));
	db.collection(employeesCollection, function(err, collection) {
		collection.insert(employee, {safe:true}, function(err, result) {
			if (err) {
				res.send({'error':'An error has occurred while creating new employee'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}
		});
	})
}

exports.delete = function(req, res) {
	var id = req.params.id;
	console.log('Deleting employee: ' + id);
	db.collection(employeesCollection, function(err, collection) {
		collection.remove({'_id' : new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
			if(err) {
				res.send({ 'error':'An error occurred when deleting employee#' + id + ": " + err });
			} else {
				console.log('' + result + ' document(s) deleted');
				res.send(req.body);
			}
		});
	});
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var eraseCollection = function() {
	db.collection(employeesCollection, function(err, collection) {
		collection.remove();
	});
};

var populateCollection = function() {
 
    var employees = [
	    {
	        name: "Bob Smith",
	        email: "bsmith@mitre.org",
	        rank: 4,
	        title: "Information Systems Engineer"
	    },
	    {
	      name: "Sally Johnson",
	      email: "sjohnson@mitre.org",
	      rank: 2,
	      title: "Aviation Engineer"
	    },
	    {
	      name: "Alfred Granson",
	      email: "agranson@mitre.org",
	      rank: 100,
	      title: "CEO"
	    },
	    {
	      name: "Jane Doe",
	      email: "jdoe@mitre.org",
	      rank: 5,
	      title: "Project Lead"
	    }
    ];
 
    db.collection(employeesCollection, function(err, collection) {
        collection.insert(employees, {safe:true}, function(err, result) {});
    });
};