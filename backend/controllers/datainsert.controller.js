const express=require('express');
const Tutorials= require("../models/index.js");
const usermodel = require('../models/datainsert.model');
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize');

async function insertdata(req,res){
    var readdata=Tutorials();
    try{
        // var tutorial = {
        //     title: req.body.title,
        //     price: req.body.price,
        //     description: req.body.description? req.body.description : false
        //   };

        return readdata['sequelize'].query("INSERT INTO `mydb`.`table1`(id,name,lastname,email,phone) values(?,?,?,?,?)", { type: readdata['sequelize'].QueryTypes.INSERT,
        replacements: [req.body.id, req.body.name, req.body.lastname,req.body.email,req.body.phone]
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
    
    
    
    }catch(err){
        console.log('error in fetching data');
  console.error(err);
  res.send('Message:'  +err);
  res.end;
    }
}
module.exports=insertdata;