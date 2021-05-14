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

router.post('/celebrities/:id/delete',(req,res,next)=>{
  const iddelete=req.params.id;
  console.log(iddelete);
  Celibrity.findByIdAndDelete(iddelete)
    .then(() => res.redirect('/celebrities'))
    .catch(error => next(error))
})

router.get('/celebrities/:id/edit',(req,res,next)=>{
  const idEdit=req.params.id;
  Celibrity.findById(idEdit)
    .then(celebrityEdit => {
      
      res.render('celebrities/edit', { celebrities : celebrityEdit});
    })
    .catch(error => next(error));
});

router.post('/celebrities/:id/edit',(req,res,next)=>{
  const idEdit=req.params.id;
  const { name, occupation, catchPhrase} = req.body;
  Celibrity.findByIdAndUpdate(idEdit, { name, occupation, catchPhrase}, { new: true })
  .then(updatedcelebrity => res.redirect(`/celebrities/${updatedcelebrity.id}`))
  .catch(error => next(error));
})




module.exports=router