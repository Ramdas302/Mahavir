var mongoose = require('mongoose');

url = 'mongodb://localhost:27017/MAVS';

mongoose.connect(url).then(()=>{
console.log('mongodb connected')
}).catch(()=>{
    console.log('mongodb not connected')
})
module.exports=mongoose;