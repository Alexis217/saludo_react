import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

const usuariosValidos = ["Cross", "Razor", "Mia", "Darius"];

app.get("/validar/:nombre", (req, res) => {
  const nombreIngresado = req.params.nombre.toLowerCase();
  const esValido = usuariosValidos.some(
    (nombre) => nombre.toLowerCase() === nombreIngresado
  );

  res.json({
    valido: esValido,
    mensaje: esValido ? "Nombre válido" : "Nombre no válido",
  });
});

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
