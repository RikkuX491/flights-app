import '../App.css';

import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

function App() {

  const [flights, setFlights] = useState([]);

  useEffect(retrieveFlightsData, []);

  function retrieveFlightsData(){
    fetch("http://localhost:4000/flights")
    .then(response => {
      if(response.ok){
        response.json().then(flightsData => setFlights(flightsData))
      }
      else{
        alert("Error: Unable to retrieve flights data!");
      }
    })
  }

  return (
    <div className="App">
      <h1>This is an app about Flights!</h1>
      <Outlet context={
        {
          flights: flights
        }
      }/>
    </div>
  );
}

export default App;
