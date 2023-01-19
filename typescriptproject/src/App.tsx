import React from 'react';
import './App.css';
import FormData from './components/FormData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CaseConversion from './components/CaseConversion';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<CaseConversion />} />
          <Route path="/products" element={<FormData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

