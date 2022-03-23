
import { useState } from 'react';
import QRCodeCanvas from './QRCodeCanvas';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className='App'>
      <h1>Free QRCode Generator</h1>
      <h3>By: Kauê</h3>
     <input type="text" 
     onChange={(element)=>{setValue(element.target.value)}} 
     value={value}
     placeholder="Digite ou cole o link"
     ></input>
    <QRCodeCanvas value={value}></QRCodeCanvas>
    </div>
  );
}

export default App;
