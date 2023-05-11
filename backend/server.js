
const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const request = require("request");
const mysql=require("mysql2");
var Sequelize = require("sequelize");
const bodyParser=require("body-parser");
const Routes=require("./routes/routes");
// Loads env variables
require("dotenv").config()
// Initalizes express server
const app = express();
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');
// morgan.token('param', function(req, res, param) {
//   return req.params[param];
// });

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());
// var corsOptions = {
//     origin: "http://localhost:3000"
//   };
//app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "false");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  
  next();
});
// app.use(bodyParser);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.raw());

// specifies what port to run the server on
const PORT = process.env.PORT || 3000;
// Adds json parsing middleware to incoming requests
app.use(express.json());

const Tutorials = require("./models/index.js");
//Tutorials.sequelize.sync();
// makes the app aware of routes in another folder
app.use('/api/mockecom', Routes);
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));