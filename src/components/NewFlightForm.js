function NewFlightForm(){
    return (
        <div>
            <h1>Add Flight Form</h1>
            <form>
                <label htmlFor="airline">Airline: </label>
                <input id="airline" type="text" name="airline" placeholder="New Airline" required />
                <br/><br/>
                <label htmlFor="image">Image: </label>
                <input id="image" type="text" name="image" placeholder="New Image" required />
                <br/><br/>
                <button type="submit">Add Flight</button>
            </form>
        </div>
    );
}

export default NewFlightForm;