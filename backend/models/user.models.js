const userModule = (sequelize, Sequelize) => {
  const user = sequelize.define("users", {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    username: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    },

    profilepic: {
      type: Sequelize.STRING,
    },

    GIN: {
      type: Sequelize.STRING,
    },
  });

  return user;
};

module.exports = { userModule };
