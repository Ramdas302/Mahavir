var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    Name:{type:String, required:true},
    content:{type:String, required:true},
   

})
mongoose.model('service',ServiceSchema);