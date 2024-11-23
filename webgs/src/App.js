
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnergyList from './components/Energylist';
import EnergyDetail from './components/EnergyDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EnergyList />} />
        <Route path="/energy/:id" element={<EnergyDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;