const express=require('express');
const getDbcon= require("../models/index.js");
const usermodel = require('../models/postdata.model');
var Promise = require('promise');
const { status } = require('express/lib/response');
const {DataTypes,QueryTypes}=require('sequelize');
const { request } = require('http');
const DbConnect = require('../models/index.js');

async function insertrecord(req,res){
const empfeedback = {
    empid:req.body.empid,
    empname:req.body.empname,
    emailid:req.body.emailid,
    comments:req.body.comments
}

var readdata = DbConnect();
const fb=readdata['sequelize'].build(empfeedback);
console.log(fb.empid);
}
module.exports=insertrecord;