const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/", mainController.index)
router.get("/contacto", mainController.contacto)
router.post("/contacto", mainController.contactoPost)
router.get("/template", mainController.template)
router.get("/gracias", mainController.gracias)
router.get("/admin", mainController.admin)
router.post("/admin", mainController.adminPost)

module.exports = router;