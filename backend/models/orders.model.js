module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("orders", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      user_id:{
        type:DataTypes.Integer,
        allowNull: false,
      },
    },
      {
       schema:'database1',
       timestamps:false,
       freezeTableName:true
      }
    )
    
    return orders;
    };
  