const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    language : String ,
});

module.exports = mongoose.model("personModel",PersonSchema);