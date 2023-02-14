const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);
router.post("/crear", userController.createOneUser);
router.get("/", userController.store);
router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.get("/:id", userController.update);
router.get("/:id", userController.destroy);

module.exports = router;
