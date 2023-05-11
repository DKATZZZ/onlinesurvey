module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("addresses", {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
      },
      line:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
      {
       schema:'database1',
       timestamps:false,
       freezeTableName:true
      }
    )
    
    return addresses;
    };
  