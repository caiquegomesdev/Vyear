import axios from 'axios';

const getVehicleInfo = async (plate) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/vehicle/${plate}`);
    return response.data; // Retorna as informações do veículo
  } catch (error) {
    throw new Error('Erro ao buscar informações do veículo');
  }
};

export { getVehicleInfo };
