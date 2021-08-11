const express = require('express');
var router = express.Router();
const path = require('path');
var multer = require('multer')
const mongoose = require('mongoose');
var ContactSchema = require('../../../app/models/contact');
var ContactModel = mongoose.model('contact');

router.post('/addcontactdata',function(req,res){
    var contactdata = new ContactModel ({

        Fullname:req.body.Fullname,
        Email:req.body.Email,
        Phone_No:req.body.Phone_No,
        Looking_For:req.body.Looking_For,
        Message:req.body.Message
        
    });
    contactdata.save(function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).json({
          message: 'Bad Request'
        });
      } else {
        res.json({
          status: 200,
          data: result
        })
      }

    });

});

router.get('/getcontactall',function(req,res){
    ContactModel.find({}).exec(function(err,result){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: result
        });
      }
    
    });
  });


  router.put('/updatecontact/:id',function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
            Fullname:req.body.Fullname,
            Email:req.body.Email,
            Phone_No:req.body.Phone_No,
            Looking_For:req.body.Looking_For,
            Message:req.body.Message
          }
        };
        ContactModel.findByIdAndUpdate(req.params.id,update, function (err, result) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status:200,
                data:result
              })
            }
      
          });
      });
  
      
  router.post('/deletecontact/:id',function(req,res){
    ContactModel.findByIdAndRemove(req.params.id,function(err,contact){
        if(err){
            res.json({
                status : 400
            })
        }else{
            res.json({
                status : 200
            })
        }
    })
  });

  module.exports=router;