const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({

 exam:String,

 className:String,

 subject:String,

 chapter:String,

 topic:String,

 difficulty:String,

 question:String,

 options:[String],

 answer:String,

 solution:String,

 source:String

});

module.exports =
mongoose.model("Question",QuestionSchema);
