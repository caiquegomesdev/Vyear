# Vyear
This project is a web application that allows users to search for vehicle information by license plate, including model, brand, and year of manufacture.

# Identificador de Ano de Veículo

Este projeto consiste em uma aplicação web que permite ao usuário consultar informações sobre um veículo (como modelo, marca e ano de fabricação) através do número da placa. O sistema é composto por uma API backend em **Express.js** que simula um banco de dados de veículos, e um frontend em **React** que interage com essa API.

## Funcionalidade

- **Frontend** (React): O usuário insere a placa do veículo em um formulário, e o sistema retorna as informações do veículo (ano, modelo, marca).
- **Backend** (Express): Uma API que simula um banco de dados de veículos e permite buscar informações de um veículo a partir de sua placa.

## Tecnologias Utilizadas

- **Frontend**:
  - React (para a construção da interface de usuário)
  - Axios (para fazer requisições HTTP à API)

- **Backend**:
  - Node.js
  - Express (para criação da API)
  - CORS (para permitir requisições de diferentes origens)

## Como Rodar o Projeto

### Backend (API)

1. **Instalar as dependências**:
   No diretório do backend, execute o comando:
   ```bash
   cd backend
   npm install

2. **Rodar o servidor: Para iniciar o servidor Express, use o comando**:
```bash
npm start 

O servidor ficará disponível em http://localhost:5000.
