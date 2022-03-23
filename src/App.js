
import { useState } from 'react';
import QRCodeCanvas from './QRCodeCanvas';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [imageURL, setImageURL] = useState('');

  return (
    <div className='App'>
      <div className='Container'>

      <h1>Free QRCode Generator</h1>
      
      <input type="text"
        onChange={(element) => { setValue(element.target.value) }}
        value={value}
        placeholder="Digite ou cole o link"
      ></input>
      <QRCodeCanvas value={value}></QRCodeCanvas>
      {/* <button type='submit'>Gerar</button> */}
      <p>Toque no QR Code para salvar</p>
      <h3>By: Kauê</h3>
      </div>
      
    </div>
  );
}

export default App;
