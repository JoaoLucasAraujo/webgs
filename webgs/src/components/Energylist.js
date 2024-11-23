
import React from 'react';
import { Link } from 'react-router-dom';
import energySources from '../data/energySources'; 

const EnergyList = () => {
  return (
    <div>
      <h1>Fontes de Energia</h1>
      <ul>
        {energySources.map((energy) => (
          <li key={energy.id}>
            <Link to={`/energy/${energy.id}`}>{energy.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyList;