import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputStr, setInputStr] = useState('');
  const [outputStr, setOutputStr] = useState('');
  
// This function take string as an input and uses regular expression to identify the uppercase in the string
  function camelToKebab(str: string): string {
      return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.value is the input the user has entered
    setInputStr(event.target.value); 
  }
  const handleClick = () => {
    setOutputStr(camelToKebab(inputStr));
  }
  return (
    <div className="App">
      <header className='App-header'>
        <label>
          Enter a string in camelCaseString: 
          <input className="Input-field" type="text" value={inputStr} onChange={handleChange}/>
        </label>
        <br />
          <button className="ChangeButton" onClick={handleClick}>Change</button>
        <br />
        <label>
          Output in kebab-case-string: 
          <input className="Input-field" type="text" value={outputStr} readOnly />
          </label>
        </header>
    </div>
  );
}

export default App;