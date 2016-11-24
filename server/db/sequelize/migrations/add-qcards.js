module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Qprocess', {
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
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('qProcess');
  }
}
