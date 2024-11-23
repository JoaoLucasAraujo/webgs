
import React from 'react';
import { useParams } from 'react-router-dom';
import energySources from '../data/energySources'; 

const EnergyDetail = () => {
  const { id } = useParams();
  const energy = energySources.find((e) => e.id === parseInt(id));

  if (!energy) {
    return <p>Fonte de energia não encontrada.</p>; 
  }

  return (
    <div>
      <h2>{energy.name}</h2>
      <p>{energy.description}</p>
      <p>Impacto Ambiental: {energy.environmentalImpact}</p>
      <p>Custo: {energy.cost}</p>
      <p>Acessibilidade: {energy.accessibility}</p>
    </div>
  );
};

export default EnergyDetail;