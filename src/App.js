import { useState } from "react";
import DogDisplay from "./components/DogDisplay";
import "./App.css";

function App() {
  const API_URL = "https://dog.ceo/api/breeds/image/random";

  //THIS is useState, you pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
  const [dog, setDog] = useState(null);

  const getDog = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();
    setDog(data.message);
  };

  //THIS IS THE HTML RETURN
  return (
    <div className="app">
      <div className="tag">Random Dog Photo Generator</div>
      <div className="submit">
        <input type="button" value="Get Random Dog" onClick={getDog} />
      </div>
      <div className="dogImg">
        <DogDisplay dog={dog} />
      </div>
    </div>
  );
}

export default App;
