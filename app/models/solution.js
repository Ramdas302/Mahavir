var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolutionSchema = new Schema({
    solutionName:{type:String, required:true},
    imageName:{type:String, required:true},
    type:{type:String, required:true},

})
mongoose.model('solution',SolutionSchema);