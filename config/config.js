require('dotenv').config();
module.exports = {
"development": {
    "username": "root",
    "password": "",
    "database": "database_pemuda_kgpm",
    "host": "localhost",
    "dialect": "mysql",
    "port": 3307
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql",
    "port": 3307
},
"production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "localhost",
    "dialect": "mysql",
    "port": process.env.DB_PORT
}
};