const express = require('express');
var router = express.Router();
const path = require('path');
var multer = require('multer')
const mongoose = require('mongoose');
var SolutionSchema = require('../../../app/models/solution');
var SolutionModel = mongoose.model('solution');


 var upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, callback) => {
        let type = req.params.type;
        let path = `./uploads`;
        callback(null, path);
      },
      filename: (req, file, callback) => {
        callback(null, file.originalname,file.fieldname);
      }
    })
  });


  router.post('/addSolution',upload.single('image'),function(req,res){
    var solutionData = new SolutionModel({

        solutionName:req.body.solutionName,
        imageName:req.file.originalname,
        type:req.file.mimetype
        
    });
    solutionData.save(function (err, result) {
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

router.get('/getSolution',function(req,res){
    SolutionModel.find({}).exec(function(err,solution){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: solution
        });
      }
    
    });
  });


  router.put('/updateSolution/:id',upload.single('image'),function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
        solutionName:req.body.solutionName,
        imageName:req.file.originalname,
        type:req.file.mimetype   
          }
        };
        SolutionModel.findByIdAndUpdate(req.params.id,update, function (err, solution) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status: 200,
                data: solution
              })
            }
      
          });
      });
  
      
  router.post('/deletSolution/:id',function(req,res){
    SolutionModel.findByIdAndRemove(req.params.id,function(err,solutiondelete){
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