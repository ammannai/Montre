const mongoose = require("mongoose");
const montreSchema = mongoose.Schema({
    price : Number,
    name : String,
    marque:String,
    description:String

});
const montre = mongoose.model('Montre',montreSchema);
module.exports=montre ;
//création du modele user