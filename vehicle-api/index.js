const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar o CORS para permitir requisições de qualquer origem
app.use(cors());

// Dados simulados dos veículos (normalmente você usaria um banco de dados real)
const vehiclesDatabase = {
  "ABC1234": {
    ano: 2020,
    modelo: "Fusca",
    marca: "Volkswagen",
  },
  "DEF5678": {
    ano: 2018,
    modelo: "Civic",
    marca: "Honda",
  },
  "XYZ4321": {
    ano: 2022,
    modelo: "Onix",
    marca: "Chevrolet",
  },
};

// Rota para consultar informações de um veículo pelo número da placa
app.get('/api/vehicle/:plate', (req, res) => {
  const plate = req.params.plate.toUpperCase(); // Normaliza a placa para maiúsculas
  const vehicle = vehiclesDatabase[plate];

  if (vehicle) {
    res.json({
      sucesso: true,
      placa: plate,
      ano: vehicle.ano,
      modelo: vehicle.modelo,
      marca: vehicle.marca,
    });
  } else {
    res.status(404).json({
      sucesso: false,
      mensagem: "Veículo não encontrado para a placa fornecida.",
    });
  }
});

// Inicializando o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
