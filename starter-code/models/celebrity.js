const mongoose= require('mongoose')
const celebritySchema= new mongoose.Schema({
    
    name:String,
    occupation:String,
    catchPhrase:String

}) // on cree des objet dans celibrity

const celibrityModel= mongoose.model('Celibrity',celebritySchema)// on cree un model

module.exports= celibrityModel  // est exporter qlq part