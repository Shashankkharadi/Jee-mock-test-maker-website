const express = require("express");
const router = express.Router();

const Question = require("../models/Question");

router.post("/generate", async (req,res)=>{

 const {
   exam,
   chapter,
   difficulty
 } = req.body;

 const questions =
 await Question.aggregate([
   {
     $match:{
       exam,
       chapter,
       difficulty
     }
   },
   {
     $sample:{
       size:30
     }
   }
 ]);

 res.json(questions);

});

module.exports = router;
