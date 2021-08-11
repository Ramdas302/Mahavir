var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    Fullname:{type:String, required:true},
    Email:{type:String, required:true},
    Phone_No:{type:String, required:true},
    Looking_For:{type:String, required:true},
    Message:{type:String, required:true},
})
mongoose.model('contact',ContactSchema);