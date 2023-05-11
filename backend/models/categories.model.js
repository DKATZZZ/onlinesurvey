module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("categories", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      title:{
        type:DataTypes.STRING,
        allowNull: false,
      },
    },
      {
       schema:'database1',
       timestamps:false,
       freezeTableName:true
      }
    )
    
    return categories;
    };
  