var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AudioVideoSolSchema = new Schema({
    heading:{type:String, required:true},
    content:{type:String, required:true},
   
  
})
mongoose.model('AudioVideo',AudioVideoSolSchema);