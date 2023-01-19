import React from 'react';
import './App.css';
import CaseConversion from './components/caseConversion';
import FormData from './components/form';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NavBar from './routes/NavBar';

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

