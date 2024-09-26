import NavBar from "./NavBar";
import Header from "./Header";

function ErrorPage(){
    return (
        <div className="App">
            <NavBar/>
            <Header/>
            <h1>Whoops! Something went wrong.</h1>
        </div>
    );
}

export default ErrorPage;