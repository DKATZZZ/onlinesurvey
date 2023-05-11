module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("products", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      title:{
        type:DataTypes.String,
        allowNull: false,
      },
      image:{
        type:DataTypes.String,
        allowNull: false,
      },
      images:{
        type:DataTypes.String,
        allowNull: false,
      },
      description:{
        type:DataTypes.String,
        allowNull: false,
      },
      price:{
        type:DataTypes.Integer,
        allowNull: false,
      },
      cat_id:{
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
    
    return products;
    };
  