const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SalesSchema = new Schema({
    id:Number,
    name:String,
    age:Number
    /*
    id:{type:Number, required:true},
    name:{type:String, required:true},
    age:{type:Number, required:true},
    /*
    role:{type: String,required:true},
    salary:{type: String,required:true},
    gender:{type: String,required:true},
     */
});
var salesman =  mongoose.model('salesman',SalesSchema);
module.exports =salesman;


//beispiel zum speichern in der DB
/*salesman.create(new salesman({
            id: 1,
            name:"test",
            age: 1
        }));*/
