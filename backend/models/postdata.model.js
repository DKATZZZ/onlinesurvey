const config = require("../models/localconfig.js");
module.exports = (sequelize, DataTypes) => {
    const EmployeeData = sequelize.define("feedback", {
      Empid: {
        type: DataTypes.String,
        allowNull: false,
      },
      Empname:{
        type:DataTypes.String,
        allowNull: false,
      },
      email:{
        type:DataTypes.String,
        allowNull: false,
      },
      comments:{
        type:DataTypes.String,
        allowNull: true,
      }
    },
      {
       schema:'mydb',
       timestamps:true,
       freezeTableName:true
      }
    )
    
    return feedback;
    };
  