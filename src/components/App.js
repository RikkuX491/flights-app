import '../App.css';

import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import Header from './Header';

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
    // newFlight.id = flights[flights.length - 1].id + 1
    // setFlights([...flights, newFlight])

    fetch("http://localhost:4000/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newFlight)
    })
    .then(response => {
      if(response.ok){
        response.json().then(newFlightData => setFlights([...flights, newFlightData]))
      }
      else{
        alert("Error: Unable to add new flight!");
      }
    })
  }

  return (
    <div className="App">
      <NavBar/>
      <Header/>
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
