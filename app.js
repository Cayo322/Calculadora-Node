// app.js

const express = require('express');
const app = express();
const port = 8080;

app.get('/calcular/:operacion/:num1/:num2', (req, res) => {
  const { operacion, num1, num2 } = req.params;

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = parseInt(num1) + parseInt(num2);
      break;
    case 'resta':
      resultado = parseInt(num1) - parseInt(num2);
      break;
    case 'multiplicacion':
      resultado = parseInt(num1) * parseInt(num2);
      break;
    case 'division':
      resultado = parseInt(num1) / parseInt(num2);
      break;
    default:
      resultado = 'Operación no válida';
  }

  res.send(`Resultado de ${operacion}: ${resultado}`);
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
