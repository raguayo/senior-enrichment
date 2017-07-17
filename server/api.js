'use strict';
const api = require('express').Router();
const db = require('../db');
const { Student, Campus } = require('../db/models/');

// console.log('api : module: ', module);
// console.log('api : require.main: ', require.main);
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))

api.get('/students', (req, res, next) => {
	Student.findAll({include: [Campus]})
		.then(students => res.json(students))
		.catch(next);
});

api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
		.then(campuses => res.json(campuses))
		.catch(next);
});

api.get('/students/:id', (req, res, next) => {
	// console.log('api get Stud by ID: ', req.params.id)
	Student.findOne({
		where: {
			id: req.params.id
		},
		include: [Campus]
	})
		.then(student => res.json(student))
		.catch(next);
});

api.get('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
		.then(campus => res.json(campus))
		.catch(next);
});

api.post('/students', (req, res, next) => {
	// console.log('REQ.BODY: ', req.body)
	Student.findOrCreate({
		where: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
		}
	})
		.spread((student, blnCreated) => {
			if (blnCreated) {
				res.json(student);
			} else {
				res.send("Student already exists.")
			}
		})
		.catch(next);
});

api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
		.then((campus) => {
				res.json(campus);
		})
		.catch(next);
});

api.put('/students/:id', (req, res, next) => {
	Student.update(
		req.body
	// { name: req.body.name,
	// 	 email: req.body.email}
		, {
			where: {
				id: req.params.id
			},
			returning: true, // return the updated object (Postgres only)
			plain: true // elinminate updated object meta-data
		})
		.then(result => {
			// console.log('Student Updated: ', result[0]);
			res.json(result[0]); // updated student object
		})
		.catch(next);
});

api.put('/campuses/:id', (req, res, next) => {
	Campus.update({
		name: req.body.name,
		image: req.body.image
	}, {
			where: {
				id: req.params.id
			},
			returning: true, // return the updated object (Postgres only)
			plain: true //elinminate updated object meta-data
		})
		.then(result => {
			// console.log(`Campus Updated: ${result[0]}`);
			res.json(result[0]); // updated campus object
		})
		.catch(next);
});

api.delete('/students/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(rowsDeleted => {
			// console.log(`Rows deleted: ${rowsDeleted}`);
			res.send(`Rows deleted: ${rowsDeleted}`);
		})
		.catch(next);
});

api.delete('/campuses/:id', (req, res, next) => {
	Campus.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(rowsDeleted => {
			// console.log(`Rows deleted: ${rowsDeleted}`);
			res.send(`Rows deleted: ${rowsDeleted}`);
		})
		.catch(next);
});

module.exports = api
