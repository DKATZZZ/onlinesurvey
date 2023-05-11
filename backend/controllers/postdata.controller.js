const express=require('express');
const Tutorials= require("../models/index.js");
const usermodel = require('../models/postdata.model');
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize');
const { request } = require('http');

async function adddata(req,res){
    var readdata=Tutorials();
    try{
        // var tutorial = {
        //     title: req.body.title,
        //     price: req.body.price,
        //     description: req.body.description? req.body.description : false
        //   };

        return readdata['sequelize'].query("INSERT INTO `mydb`.`feedback`(Empid,EmpName,Email,Comments) values(?,?,?,?)", { 
               type: readdata['sequelize'].QueryTypes.INSERT,
               replacements: [req.body.empid, req.body.empname, req.body.email, req.body.comments]
         

        },
        )
          .then(data => {
            return res.send(data.json());
          })
          .catch(err => {
            return res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });

        // return readdata['sequelize'].create(req.body).Comments.then(() => {
        //       return res.status(200).send('ok');
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //       res.status(400).send(err);
        //      });
        // const {id,name,mail,comment1}=req.body; 

        // return "INSERT INTO `mydb`.`feedback`(Empid,EmpName,Email,Comments) values('${id}','${name}','${mail}','${comment1}')";
    
    
    
    }catch(err){
        console.log('error in fetching data');
  console.error(err);
  res.send('Message:'  +err);
  res.end;
    }
}
module.exports=adddata;