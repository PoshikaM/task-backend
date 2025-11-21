module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Task', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  };
  