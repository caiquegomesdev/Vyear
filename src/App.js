import React, { useState } from 'react';
import './styles/App.css';
import VehicleForm from './components/VehicleForm';
import VehicleInfo from './components/VehicleInfo';

const App = () => {
  const [vehicleInfo, setVehicleInfo] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>Identificador de Ano de Veículo</h1>
      </header>
      <VehicleForm setVehicleInfo={setVehicleInfo} />
      {vehicleInfo && <VehicleInfo vehicleInfo={vehicleInfo} />}
    </div>
  );
}

export default App;
