
const pool = require('../connection/conect');

const retornarMedicos = async () => {
  const conect = await pool.getConnection();
  
  const medicos_tb = await conect.query('SELECT * FROM MEDICOS');

  const medicos = medicos_tb[0];

  conect.release();

  return medicos;
}

module.exports = {
  retornarMedicos
}
