module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'abdulqadir123',
  DB: 'rootcode',
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
