const connection = require("./connection.js");

// this orm only applies to the burgers table, so we can just hard code that in...
// orm for database interaction
const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers;", function(err,res){
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(item, cb){
        connection.query(`INSERT INTO burgers(burger_name) VALUES (?);`, item, function(err,res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(item, cond, cb){
        connection.query(`UPDATE burgers SET ? WHERE ${cond};`, item, function(err,res){
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;