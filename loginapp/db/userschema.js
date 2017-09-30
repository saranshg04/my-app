const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({userid:String,password:String,username:String});


var User = mongoose.model("usermasters",userSchema);



module.exports = User;