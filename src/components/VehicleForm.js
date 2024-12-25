import React, { useState } from 'react';
import axios from 'axios';
import '../styles/VehicleForm.css';

const VehicleForm = ({ setVehicleInfo }) => {
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   try {
  //     // Substitua a URL com a sua API real
  //     const response = await axios.get(`https://api.veiculos.com/placa/${plate}`);
  //     setVehicleInfo(response.data);
  //   } catch (err) {
  //     setError('Erro ao buscar informações. Verifique a placa ou tente novamente mais tarde.');
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validação da placa (apenas para o formato de placa no Brasil)
    const plateRegex = /^[A-Z]{3}\d{4}$/;
    if (!plateRegex.test(plate)) {
      setError('Formato de placa inválido. Use AAA-1234.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:5000/api/vehicle/${plate}`);
      setVehicleInfo(response.data);
    } catch (err) {
      setError('Erro ao buscar informações. Verifique a placa ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="vehicle-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a placa do veículo"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Buscar'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VehicleForm;

