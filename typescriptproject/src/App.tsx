import React, { useState } from 'react';
import './App.css';
import CaseConversion from './components/caseConversion';
import FormData from './components/form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    const [isCaseConversion, setIsCaseConversion] = useState(true);

    const handleClick = (val: boolean) => {
      setIsCaseConversion(val);
    };
    return (
      <Router>
          <div>
            <button onClick={() => handleClick(true)}>Case Conversion</button>
            <button onClick={() => handleClick(false)}>Product Form</button>
            <Routes>
            {isCaseConversion ? (
                <Route path="/" element={<CaseConversion />} />
            ) : (
                  <Route path="/products" element={<FormData />} />
                )}
              </Routes> 
          </div>
        </Router>
      );
}

export default App;

