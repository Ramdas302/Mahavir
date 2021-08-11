var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutusSchema = new Schema({
    heading:{type:String, required:true},
    content:{type:String, required:true},
    imageName:{type:String, required:true},
    type:{type:String, required:true},

})
mongoose.model('aboutus',AboutusSchema);