function Flight({flight}){

    console.log(flight)

    return (
        <li>
            <h2>Flight # {flight.id}</h2>
            <h2>Airline: {flight.airline}</h2>
        </li>
    );
}

export default Flight;