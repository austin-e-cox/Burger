require("./connection.js");

const orm = {
    selectAll: function(table){
        connection.query("SELECT * FROM ??", table, function(err,res){
            if (err) throw err;
            return result;
        });
    },
    insertOne: function(table, item){
        connection.query("INSERT INTO ??(burger) SET ?", [table,item], function(err,res){
            if (err) throw err;
            return result;
        });
    },
    updateOne: function(table, item, cond){
        connection.query("UPDATE ?? SET ? WHERE ?", [table,item,cond], function(err,res){
            if (err) throw err;
            return result;
        });
    }
};

module.exports = orm;