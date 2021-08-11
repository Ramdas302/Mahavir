var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkProSchema = new Schema({
    Name:{type:String, required:true},
    content:{type:String, required:true},
   

})
mongoose.model('work_pro',WorkProSchema);