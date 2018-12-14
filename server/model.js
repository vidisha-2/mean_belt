const mongoose = require('mongoose');
var uniqueValidator=require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/pets');

// var SkillSchema = new mongoose.Schema({
//     skill:{type:String, min:0, max:3, required:false}
// }, {timestamps:true});

var PetSchema = new mongoose.Schema({
    name: {type:String, unique:true, minlength:[3, "Must be three characters long"], required:[true, "Must enter 3 characters"]},
    pettype: {type: String, minlength:[3, "Must be three characters long"], required:[true, "Must enter 3 characters"]},
    desc:{type: String, minlength:[3, "Must be three characters long"], required:[true, "Must enter 3 characters"]},
    skillZero:{type:String,default:"", min:0, max:3},
    skillOne:{type:String,default:"", min:0, max:3},
    skillTwo:{type:String,default:"", min:0, max:3},
    like:{type:Number, default:0},
    isDisabled:{type:Boolean}
},{timestamps:true});
// PetSchema.plugin(uniqueValidator);
module.exports={Pet:mongoose.model('Pet', PetSchema)}