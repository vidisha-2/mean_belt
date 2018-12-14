const Pet = require('./model').Pet;
// const Skill = require('./model').Skill;""
var path = require('path');

module.exports={
    main: function(req, res){
        Pet.find({}).sort({pettype:-1})
        .then(data=> console.log("All pets", data)||res.json(data))
        .catch(errs=>console.log("Cannot display, errors", errs)||res.json(errs))
    },
    create: function(req,res){
        Pet.create(req.body)
        .then(data=>console.log("Successfully added",data) || res.json(data))
        .catch(errs => console.log("errors", errs) || res.json(errs))
    },
    displayOne: function(req, res){
        Pet.findById(req.params.id)
        .then(data=>console.log("Successfully displayed",data) || res.json(data))
        .catch(errs => console.log("It had errors", errs) || res.json(errs))
    },
    update: function(req, res){
        Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators:true, new:true})
        .then(data=> console.log("Updated", data) || res.json(data))
        .catch(errs => console.log("Update had errors", errs) || res.json(errs))
    },
    deleteOne: function(req, res){
        Pet.findByIdAndRemove(req.params.id)
        .then(data => console.log("deleted", data) || res.json(data))
        .catch(errs => console.log("deletehad errors", errs) || res.json(errs))
    },
    addLike:function(req,res){
        var num = req.params.num;
        Pet.findOneAndUpdate({"_id":req.params.id},{$set: {like:num}})
        .then((data)=>console.log(data)||res.json(data))
        .catch((err)=>console.log(err)||res.json(err)) 
    },
    catch: function(req, res, next){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }
    
}