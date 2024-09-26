import App from './components/App';
import ErrorPage from './components/ErrorPage';

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    }
];

export default routes;