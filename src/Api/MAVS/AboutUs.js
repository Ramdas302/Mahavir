const express = require('express');
var router = express.Router();
const path = require('path');
var multer = require('multer')
const mongoose = require('mongoose');
var AboutusSchema = require('../../../app/models/Aboutus');
var AboutusModel = mongoose.model('aboutus');
var ServiceSchema = require('../../../app/models/service');
var ServiceModel = mongoose.model('service');
var WorkProSchema = require('../../../app/models/workprocess');
var WorkProModel = mongoose.model('work_pro');

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


  router.post('/adddata',upload.single('image'),function(req,res){
    var AboutData = new AboutusModel({

        heading:req.body.heading,
        content:req.body.content,
        imageName:req.file.originalname,
        type:req.file.mimetype
        
    });
    AboutData.save(function (err, result) {
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

router.get('/getAll',function(req,res){
    AboutusModel.find({}).exec(function(err,about){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: about
        });
      }
    
    });
  });


  router.put('/updateData/:id',upload.single('image'),function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
            heading:req.body.heading,
            content:req.body.content,
            imageName:req.file.originalname,
            type:req.file.mimetype 
          }
        };
        AboutusModel.findByIdAndUpdate(req.params.id,update, function (err, aboutdata) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status: 200,
                data: aboutdata
              })
            }
      
          });
      });
  
      
  router.post('/deletdata/:id',function(req,res){
    AboutusModel.findByIdAndRemove(req.params.id,function(err,aboutdelete){
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



  router.post('/addservices',function(req,res){
    var servicesdata = new ServiceModel({

      Name:req.body.Name,
      content:req.body.content
        
    });
    servicesdata.save(function (err, result) {
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

router.get('/getsevices',function(req,res){
    ServiceModel.find({}).exec(function(err,result){
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


  router.put('/updateservices/:id',function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
            Name:req.body.Name,
            content:req.body.content 
          }
        };
        ServiceModel.findByIdAndUpdate(req.params.id,update, function (err, sevices) {
            if (err) {
              console.error("err"+err)
              return res.status(400).json({
                message: 'Bad Request'
              });
            } else {
              res.json({
                status:200,
                data:sevices
              })
            }
      
          });
      });
  
      
  router.post('/deleteservices/:id',function(req,res){
    ServiceModel.findByIdAndRemove(req.params.id,function(err,servicedelete){
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


  router.post('/addprocess',function(req,res){
    var processdata = new WorkProModel ({

      Name:req.body.Name,
      content:req.body.content
        
    });
    processdata.save(function (err, result) {
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

router.get('/getprocessdata',function(req,res){
    WorkProModel.find({}).exec(function(err,result){
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


  router.put('/updateprocess/:id',function(req,res){
    console.log(req.body);
        
        update = {
          $set: {
            Name:req.body.Name,
            content:req.body.content 
          }
        };
        WorkProModel.findByIdAndUpdate(req.params.id,update, function (err, result) {
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
  
      
  router.post('/deleteprocess/:id',function(req,res){
    WorkProModel.findByIdAndRemove(req.params.id,function(err,deleteprocess){
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