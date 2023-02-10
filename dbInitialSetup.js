const db = require("./models");


module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync();
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/articleSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
