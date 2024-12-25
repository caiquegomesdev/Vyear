import React from 'react';
import '../styles/VehicleInfo.css';

const VehicleInfo = ({ vehicleInfo }) => {
  return (
    <div className="vehicle-info">
      <h2>Informações do Veículo</h2>
      <p><strong>Placa:</strong> {vehicleInfo.placa}</p>
      <p><strong>Ano de Fabricação:</strong> {vehicleInfo.ano}</p>
      <p><strong>Modelo:</strong> {vehicleInfo.modelo}</p>
      <p><strong>Marca:</strong> {vehicleInfo.marca}</p>
    </div>
  );
};

export default VehicleInfo;
