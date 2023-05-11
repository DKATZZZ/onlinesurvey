const express=require("express");
const dbconn  = require("../controllers/dbconn.js");
const insertdata = require("../controllers/datainsert.controller.js");
const postdata = require("../controllers/postdata.controller.js");
const getRecords = require("../controllers/select.controller.js");
const users = require("../controllers/users.js");
const adddata = require("../controllers/postdata.controller.js");
const insertrecord = require("../controllers/insertrecord.controller.js");

const router=express.Router();

router.get('/',users);
//add addition route

//add jsonpayload route

//getuser to connect and select data from db
router.get('/getdata',getRecords);

//connect to db
router.get('/connect',dbconn);
//insert data to db
router.post('/pushdata',insertdata);
router.post('/adddata',adddata);
router.post('/insertrecord',insertrecord);

module.exports=router;