const express = require('express');
const router=express.Router()

const Celibrity = require('../models/celebrity')

router.get('/celebrities', (req,res,next)=>{
   Celibrity.find()
   .then(function(allCelebritiesFromDb){
     res.render('celebrities/index', {myCelebrities: allCelebritiesFromDb})
   })
   .catch(err=>console.log(err));
  })

module.exports=router