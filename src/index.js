import React from 'react';
import ReactDOM from 'react-dom/client'; // Para versões mais recentes do React
import './index.css'; // Estilos globais, se existirem
import App from './App'; // Componente principal da aplicação

// Criação do ponto de entrada para a aplicação
const root = ReactDOM.createRoot(document.getElementById('root')); // Onde a app será renderizada

// Renderiza o componente App dentro da div com id 'root' do index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

