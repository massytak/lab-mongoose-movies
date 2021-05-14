const express = require('express');
const router=express.Router()

const Celibrity = require('../models/celebrity')

router.get('/celebrities', (req,res,next)=>{
   Celibrity.find()
   .then(function(allCelebritiesFromDb){
     res.render('celebrities/index', {myCelebrities: allCelebritiesFromDb})
   })
   .catch(err=>console.log(err));
  });

  
  router.get('/celebrities/new',(req,res,next)=>{
    res.render('celebrities/new')
    
  });
  router.post('/celebrities/new',(req,res,next)=>{
    
    let nameAdd=req.body.name;
    let occupationAdd=req.body.occupation;
    let catchPhraseAdd=req.body.catchPhrase;

    console.log(nameAdd,occupationAdd,catchPhraseAdd);
    const addCelebrity=new Celibrity({
    name:nameAdd,
    occupation:occupationAdd,
    catchPhrase:catchPhraseAdd
    })
    addCelebrity.save()
     .then(function(celebrityFromDb){
       res.redirect('/celebrities')
     })
     .catch((err)=> console.log(err))
  });

  

router.get('/celebrities/:celebritiesId',(req,res,next)=>{
   
  console.log(req.params.celebritiesId);
  Celibrity.findOne({_id:req.params.celebritiesId})
  .then((celebritieFromDb)=>{
    console.log(celebritieFromDb);
    res.render('celebrities/show',{ myCelebritie : celebritieFromDb })
  })
  .catch((err=> console.log(err)))
})



module.exports=router