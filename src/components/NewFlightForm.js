import { useOutletContext } from "react-router-dom";

import { useState } from "react";

function NewFlightForm(){

    const [formData, setFormData] = useState({
        airline: "",
        image: ""
    })

    const {addFlight} = useOutletContext();

    function handleSubmit(event){
        event.preventDefault()
        addFlight(formData)
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h1>Add Flight Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="airline">Airline: </label>
                <input onChange={updateFormData} id="airline" type="text" name="airline" placeholder="New Airline" value={formData.airline} required />
                <br/><br/>
                <label htmlFor="image">Image: </label>
                <input onChange={updateFormData} id="image" type="text" name="image" placeholder="New Image" value={formData.image} required />
                <br/><br/>
                <button type="submit">Add Flight</button>
            </form>
        </div>
    );
}

export default NewFlightForm;