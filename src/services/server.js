// const express = require('express');
// const app = express();

// // Banco de dados fictício de veículos
// const vehiclesDatabase = {
//   'ABC1234': { ano: 2020, modelo: 'Fusca', marca: 'Volkswagen' },
//   'XYZ5678': { ano: 2018, modelo: 'Civic', marca: 'Honda' }
// };

// // Rota para buscar veículo por placa
// app.get('/api/vehicle/:plate', (req, res) => {
//   const plate = req.params.plate.toUpperCase(); // Normaliza a placa para maiúsculas
//   const vehicle = vehiclesDatabase[plate];

//   if (vehicle) {
//     res.json({
//       sucesso: true,
//       placa: plate,
//       ano: vehicle.ano,
//       modelo: vehicle.modelo,
//       marca: vehicle.marca,
//     });
//   } else {
//     res.status(404).json({
//       sucesso: false,
//       mensagem: "Veículo não encontrado para a placa fornecida.",
//     });
//   }
// });

// // Inicializando o servidor
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`API rodando na porta ${PORT}`);
// });




const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/vehicleDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar no MongoDB", err));

// Definir o esquema e modelo de veículo
const vehicleSchema = new mongoose.Schema({
  placa: String,
  ano: Number,
  modelo: String,
  marca: String
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Habilitar o CORS para permitir requisições de qualquer origem
app.use(cors());
app.use(express.json());

// Rota para consultar informações de um veículo
app.get('/api/vehicle/:plate', async (req, res) => {
  const plate = req.params.plate.toUpperCase();

  // Validação de formato de placa
  const plateRegex = /^[A-Z]{3}\d{4}$/;
  if (!plateRegex.test(plate)) {
    return res.status(400).json({ sucesso: false, mensagem: "Formato de placa inválido." });
  }

  try {
    const vehicle = await Vehicle.findOne({ placa: plate });
    if (vehicle) {
      res.json({
        sucesso: true,
        placa: vehicle.placa,
        ano: vehicle.ano,
        modelo: vehicle.modelo,
        marca: vehicle.marca
      });
    } else {
      res.status(404).json({ sucesso: false, mensagem: "Veículo não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro no servidor" });
  }
});


// Inicializando o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});




const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = 'minhaChaveSecreta'; // Em produção, armazene isso de forma segura

// Exemplo de rota de login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validação do usuário (em um banco real)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ sucesso: true, token });
  }

  return res.status(401).json({ sucesso: false, mensagem: 'Credenciais inválidas' });
});

// Middleware para proteger rotas com JWT
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ sucesso: false, mensagem: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ sucesso: false, mensagem: 'Token inválido' });
  }
};

// Rota protegida
app.get('/api/vehicle/:plate', authMiddleware, async (req, res) => {
  const plate = req.params.plate.toUpperCase();
  // O restante da lógica da API
});
