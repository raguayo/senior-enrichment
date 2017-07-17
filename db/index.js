'use strict'
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// create the database instance that can be used in other database files
const db = module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});

// run our models file (makes all associations for our Sequelize objects)
require('./models')

// sync the db, creating it if necessary
// function sync(force=true, retries=0, maxRetries=5) {
//   return db.sync({force})
//   .then(ok => console.log(`Synced models to db ${connectionString}`))
//   .catch(fail => {
//     // Don't do this auto-create nonsense in prod, or
//     // if we've retried too many times.
//     if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
//       console.error(chalk.red(`********** database error ***********`))
//       console.error(chalk.red(`    Couldn't connect to ${connectionString}`))
//       console.error()
//       console.error(chalk.red(fail))
//       console.error(chalk.red(`*************************************`))
//       return
//     }
//     // Otherwise, do this autocreate nonsense
//     console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${name}...`)
//     return new Promise((resolve, reject) =>
//       require('child_process').exec(`createdb "${name}"`, resolve)
//     ).then(() => sync(true, retries + 1))
//   })
// }

// db.didSync = sync();

// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var Student = require('./models/student');
var Campus = require('./models/campus');

var data = {
  campus: [
    {
      name: "Northwestern University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdiSzgiFsd46Bi_xv8QJONvIYFUQinbcrO_KUjBrkDB8PdjHqmQ",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Purdue University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT611gXHYibsvtsaIsUrlYByrnDjjADY3WBOHYv7n_uy3MFuj-Skg",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "University of Southern Califorinia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7UJbwY5LeDQ0CzJv6Wg0ZefXAz6UQCUGoeOjU6bQUgbT1DOV9A",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Harvard University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqo9jXB4_BhlLVjW9kdx6S2JKH_E_gCDaCuQhP0hF9EX3c0Z9-",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "University of Miami",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG-7fZHn2kB-v7JzMmuyXfwfOeZqnb9yl60CLzOG5av1iJkGb",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "University of North Texas State",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDDfcIKKLpRPxkmZDBikGfnyYb9qvURc_dnn2ur7W6C5GHiLY",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Boston College",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cdSaqWWHIl599I07nBTxEDUpJkGTEOfBZuL6cg0ADdO-c7ptBg",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "University of Michigan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMkTpCLHZHLQNaMtaN9J4N5sWJvLZWT4HUVNV1UosQJQpoq0Waw",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "University of Chicago",
      image: "http://static2.businessinsider.com/image/55a3e501eab8ea234e028ac8-480/university-of-chicago.jpg",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Marquette University",
      image: "https://collegetimes.co/wp-content/uploads/marquette-university-1.jpg",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Roosevelt University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePep6wI5agGRALV8xQOj279ZTlUKzAQ-K_t4YWEc6V7OZcqXI",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
    {
      name: "Stanford University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIFN-iNABIcG-5Ga1xZpZkZo1_KNxXlBdVsxb0Mg4t9H6qOwpLA",
      // address: "",
      // city: "Chicago",
      // state: "IL",
      // phone: "123-456-7890",
      // location: [41.9134555, -87.6503527],
    },
  ],
  student: [
    {
      firstName: "Ivan",
      lastName: "Tungo",
      email: "ivan@gmail.com",
      campusId: 1,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Siri",
      lastName: "Siracha",
      email: "siri@gmail.com",
      campusId: 2,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "David",
      lastName: "Davidson",
      email: "david@gmail.com",
      campusId: 3,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Melanie",
      lastName: "You",
      email: "melanie@you.com",
      campusId: 4,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Bridget",
      lastName: "Fortun",
      email: "bridget@fortun.com",
      campusId: 5,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Fra",
      lastName: "Angelica",
      email: "fra@angleica.com",
      campusId: 6,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      campusId: 7,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Siri",
      lastName: "Siracha2",
      email: "siri2@gmail.com",
      campusId: 8,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "David",
      lastName: "Davids",
      email: "davids@gmail.com",
      campusId: 9,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Melanies",
      lastName: "Yu",
      email: "melanies@you.com",
      campusId: 10,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Bridgette",
      lastName: "Fortunw",
      email: "bridgette@fortun.com",
      campusId: 11,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
    {
      firstName: "Francis",
      lastName: "Angela",
      email: "francis@angela.com",
      campusId: 12,
      // address: "71 E Upper Wacker Dr",
      // city: "Chicago", state: "IL",
      // phone: "123-456-7890",
      // location: [41.8884073, -87.6293817],
      // amenities: "Pool, Free Wi-Fi"
    },
  ]
}
  ;

db.sync({ force: true })
  .then(function () {
    // console.log("Dropped old data, now inserting data");
    // console.log('data: ', data);
    return Promise.map(Object.keys(data), function (name) {
      // console.log('name: ', name)
      return Promise.map(data[name], function (item) {
        return db.model(name)
          .create(item
          );
      })
    });
  })
  .then(function () {
    console.log("Finished inserting data (press ctrl-c to exit)");
  })
  .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
  });
