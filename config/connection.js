const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password1',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log(`Connected as id: ${connection.threadId}`)
});

module.exports = connection;