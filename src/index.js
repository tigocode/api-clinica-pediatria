const express = require('express');
const app = express();

const { retornarMedicos } = require('./service/services.js');

app.get('/medicos', async (req, res) => {
  const medicos = await retornarMedicos();
  res.status(200).json(medicos);
})
app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleDateString()}`);
});
