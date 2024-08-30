const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(morgan('dev'));  // Logger

// Rotas
app.use('/api/users', userRoutes);

// Porta
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});