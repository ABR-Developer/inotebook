const mongoose = require("mongoose");

const NotesSchema = new Schema ({
    title : {
        type : string,
        required : true,
        unique : true
    },
    desciption : {
        type : string,
        required : true,
    },
    tag : {
        type : string,
        default : "General"
    },
    date : {
        type : date,
        default : Date.now,
    },
})

module.exports = mongoose.model("notes", NotesSchema);