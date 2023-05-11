const express=require('express');
const Tutorials= require("../models/index.js");
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize');

async function getRecords(req,res){
    var readdata= await Tutorials();
    try{
        // var tutorial = {
        //     title: req.body.title,
        //     price: req.body.price,
        //     description: req.body.description? req.body.description : false
        //   };
         if(res.headersSent !== true){
            readdata['sequelize']
          .query("SELECT * FROM `mydb`.`table1`", 
          { type: readdata['sequelize'].QueryTypes.SELECT})
          .then(data => {
            return res.send(JSON.stringify(data));
            console.log(JSON.parse(data));
          })
          .catch(err => {
            return res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
         }
       
    
    
    
    }catch(err){
        console.log('error in fetching data');
  console.error(err);
  return res.send('Message:'  +err);
  res.end;
    }

}
module.exports=getRecords;