const mongoose = require("mongoose");

const TemoignagesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usrId : {type : String , required : true},
    link : {type : String , required : true}
});

module.exports = mongoose.model('Temoignages', TemoignagesSchema);
