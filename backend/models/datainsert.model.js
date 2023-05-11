module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("table1", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      name:{
        type:DataTypes.String,
        allowNull: false,
      },
      lastname:{
        type:DataTypes.String,
        allowNull: false,
      },
      email:{
        type:DataTypes.String,
        allowNull: false,
      },
      phone:{
        type:DataTypes.String,
        allowNull: false,
      }
    },
      {
       schema:'mydb',
       timestamps:false,
       freezeTableName:true
      }
    )
    
    return table1;
    };
  