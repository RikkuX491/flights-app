import '../App.css';

import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

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

  function addFlight(newFlight){
    newFlight.id = flights[flights.length - 1].id + 1
    setFlights([...flights, newFlight])
  }

  return (
    <div className="App">
      <NavBar/>
      <h1>This is an app about Flights!</h1>
      <Outlet context={
        {
          flights: flights,
          addFlight: addFlight
        }
      }/>
    </div>
  );
}

export default App;
