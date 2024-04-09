import "./App.css";
import cityAPI from "./api/cities.api";
import { useState } from "react";

function App() {
  // Get a list of cities from your database

  const [cityId, setCityId] = useState();
  const [city, setCity] = useState();
  return (
    <>
      <input type="text" onChange={(e) => setCityId(e.target.value)} />
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button
        onClick={() => {
          cityAPI.update(cityId, city);
        }}
      >
        Update City
      </button>
    </>
  );
}

export default App;
