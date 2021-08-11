var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BuiltSchema = new Schema({
    heading:{type:String, required:true},
    imageName:{type:String, required:true},
    type:{type:String, required:true},

})
mongoose.model('built',BuiltSchema);