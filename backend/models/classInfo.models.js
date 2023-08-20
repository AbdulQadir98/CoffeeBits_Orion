const classInfoModule = (sequelize, Sequelize) => {
  const classInfo = sequelize.define("classInfo", {
    classInfoId: {
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

  return classInfo;
};

module.exports = { classInfoModule };
