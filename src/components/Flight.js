function Flight({flight}){

    return (
        <li>
            <h2>Flight # {flight.id}</h2>
            <h2>Airline: {flight.airline}</h2>
            <img src={flight.image} alt={flight.airline}/>
        </li>
    );
}

export default Flight;