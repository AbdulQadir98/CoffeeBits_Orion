const planetInfoModule = (sequelize, Sequelize) => {
  const planetInfo = sequelize.define("planetInfo", {
    planetInfoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    heading: {
      type: Sequelize.STRING,
    },

    description: {
      type: Sequelize.TEXT,
    },

    icon: {
      type: Sequelize.STRING,
    },
  });

  return planetInfo;
};

module.exports = { planetInfoModule };
