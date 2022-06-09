import {useState} from 'react';
import './App.css';

function App() {
  const API_URL = 'https://dog.ceo/api/breeds/image/random'

//THIS is useState, you pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
  const [dog, setDog] =useState(null)

const getDog = async () => {
  const response = await fetch(API_URL);
}

//THIS IS THE HTML RETURN
  return (
    <div className='app'>
      <h1>Random Dog Photo Generator</h1>
      <input type="button" value="Get Random Dog" onClick={getDog} />
      <img src={dog} alt="random dog" />
    </div>
    
  );
}

export default App;
