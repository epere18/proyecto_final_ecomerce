const express = require ("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController");
const checkCarritoUserMiddleware = require("../middleware/checkCarritoUserMiddleware")

//rutas de carrito

router.get ("/", carritoController.carrito)
router.delete ("/:carritoID", carritoController.carritoDelete)
router.post("/:id", carritoController.guardarCarrito)
router.get("/compraFin",checkCarritoUserMiddleware, carritoController.compraFin);

module.exports = router;