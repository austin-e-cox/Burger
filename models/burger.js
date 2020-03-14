const orm = require("../config/orm.js");

// burger object which handles requests to the orm/database
const burger = {
    all: function(cb){
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(item, cb){
        orm.insertOne(item, function(res) {
            cb(res);
        });
    },
    update: function(item, cond, cb){
        orm.updateOne(item, cond, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;