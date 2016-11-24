"use strict";

// add links
module.exports = function(sequelize, DataTypes) {
  var QCard = sequelize.define("QCard", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    duedate: DataTypes.DATE,
    notifystepchange : DataTypes.BOOLEAN
    //auditstepchange : DataTypes.BOOLEAN
    }, {
    classMethods: {
      associate: function(models) {
        QCard.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        //QCard.belongsToMany(models.QCardStep, { through : "QCard_QCardSteps"});
      }
    }
  });

  return QCard;
};
