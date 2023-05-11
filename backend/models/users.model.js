module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("users", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      username:{
        type:DataTypes.String,
        allowNull: false,
      },
      password:{
        type:DataTypes.String,
        allowNull: false,
      },
      email:{
        type:DataTypes.String,
        allowNull: false,
      },
      fname:{
        type:DataTypes.String,
        allowNull: false,
      },
      lname:{
        type:DataTypes.String,
        allowNull: false,
      },
      age:{
        type:DataTypes.Integer,
        allowNull: false,
      },
      role:{
        type:DataTypes.Integer,
        allowNull: false,
      },
      type:{
        type:DataTypes.String,
        allowNull: false,
      },
    },
      {
       schema:'database1',
       timestamps:false,
       freezeTableName:true
      }
    )
    
    return users;
    };
  