const orm = require("./config/orm.js");

let burgers = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update
    }

    //need to finish this. use the cats activity.
}