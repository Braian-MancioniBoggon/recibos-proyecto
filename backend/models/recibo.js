const mongoose = require("mongoose");

const reciboSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  fecha: { type: Date, required: true },
  nombre: { type: String, required: true },
  domicilio: { type: String, required: true },
  condicionIVA: { type: String, required: true },
  localidad: { type: String, required: true },
  cuit: { type: String, required: true },
  cantidad: { type: Number, required: true },
  detalle: { type: String, required: true },
  transporte: { type: String, required: true },
  valorDeclarado: { type: Number, required: true },
  bultos: { type: Number, required: true },
  flete: { type: String, required: true },
  imagenRecibo: { type: String } // Ruta de la imagen
});

module.exports = mongoose.model("Recibo", reciboSchema);