const express = require("express");
const router = express.Router();
const { parse, format } = require("date-fns");
const Recibo = require("../models/recibo");

// Obtener todos los recibos
router.get("/", async (req, res) => {
  try {
    const recibos = await Recibo.find();
    res.json(recibos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los recibos" });
  }
});

// Crear un recibo
router.post("/", async (req, res) => {
  try {
    // Convierte la fecha desde el formato 'DD-MM-YYYY' al formato ISO 8601
    const fechaFormateada = parse(req.body.fecha, 'dd-MM-yyyy', new Date());
    req.body.fecha = fechaFormateada.toISOString()
    
    const nuevoRecibo = new Recibo(req.body);
    await nuevoRecibo.save();
    res.status(201).json(nuevoRecibo);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el recibo" });
  }
});

module.exports = router;