import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Aute from './components/Autenticacion/Aute';
import VAdmin from './components/VistaAdmin/VAdmin';
import ConsultaAsistenciaGrua from "./components/ConsultaAsistenciaGrua/consultaAsistenciaGrua";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/autenticacion" element={<Aute />} />
          <Route path="/Vistaadmin/*" element={<VAdmin />} />
          <Route path="/consultaAsistenciagrua" element={<ConsultaAsistenciaGrua/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;