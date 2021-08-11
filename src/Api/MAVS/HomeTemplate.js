const express = require('express');
var router = express.Router();
const path = require('path');
var multer = require('multer')
const mongoose = require('mongoose');
var AudioVideoSolSchema = require('../../../app/models/AudioVideo');
var AudioVideoModel = mongoose.model('AudioVideo');
var BuiltSchema = require('../../../app/models/Built');
var BuiltModel = mongoose.model('AudioVideo');


router.post('/addAudioVideo',function(req,res){
    var AudioVideodata = new AudioVideoModel({

        heading:req.body.heading,
        content:req.body.content,
        
    });
    AudioVideodata.save(function (err, result) {
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

router.get('/getAudioVideo',function(req,res){
    AudioVideoModel.find({}).exec(function(err,AudioVideo){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: AudioVideo
        });
      }
    
    });
  });


  router.put('/updateHoliday/:id',function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
            heading:req.body.heading,
            content:req.body.content,
           
          }
        };
        AudioVideoModel.findByIdAndUpdate(req.params.id,update, function (err, audiovideo) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status: 200,
                data: audiovideo
              })
            }
      
          });
      });
  
      
  router.post('/deletAudioVideo/:id',function(req,res){
    AudioVideoModel.findByIdAndRemove(req.params.id,function(err,deletAudioVideo){
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


  router.post('/addBuilt',upload.single('image'),function(req,res){
    var BuiltData = new BuiltModel({

        heading:req.body.heading,
        imageName:req.file.originalname,
        type:req.file.mimetype
        
    });
    BuiltData.save(function (err, result) {
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

router.get('/getBuilt',function(req,res){
    BuiltModel.find({}).exec(function(err,built){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: built
        });
      }
    
    });
  });


  router.put('/updateBuilt/:id',upload.single('image'),function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
        heading:req.body.heading,
        imageName:req.file.originalname,
        type:req.file.mimetype   
          }
        };
        BuiltModel.findByIdAndUpdate(req.params.id,update, function (err, Built) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status: 200,
                data: Built
              })
            }
      
          });
      });
  
      
  router.post('/deletBuilt/:id',function(req,res){
    BuiltModel.findByIdAndRemove(req.params.id,function(err,deleteBuilt){
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