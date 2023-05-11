module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("ordersdetails", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      order_id:{
        type:DataTypes.Integer,
        allowNull: false,
      },
      product_id:{
        type:DataTypes.Integer,
        allowNull: false,
      },
      quantity:{
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
    
    return ordersdetails;
    };
  