import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [country,setCountry] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data => setCountry(data))
  },[])
  return (
    <div>
      <h1>Country {country.length}</h1>
      
    </div>
  );
}

export default App;
