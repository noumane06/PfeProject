const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type : {type : String , required:true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    companyname: { type: String, required: false },
    title: { type: String, required: false },
    domaine: [String],
    addresse: { type: String, required: true },
    city: { type: String, required: true },
    mobilephone: {
        type: String,
        required: true
    },
    fixphone: {
        type: String,
        required: false
    },
    presentation: { type: String, required: false , default : ""},
    diplome: [mongoose.Schema.Types.Mixed],
    languages: [String] ,
    Usrimg: { type: String, required: false },
    gender: { type: String, required: true },
    horraire: [String],
    booked: mongoose.Schema.Types.Mixed,
    stars: [String],
    Notification : [mongoose.Schema.Types.Mixed],
    NotifView : {type : Number , default : 0},
    verifyEmailString : { type : String , default : "" },
    EmailVerifed : {type : Boolean , default : false}
});

module.exports = mongoose.model('Users', userSchema);