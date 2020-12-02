import logo from './logo.svg';
import './App.css';
import Navbar from './Website-App/components/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Website-App/components/Pages/Home';

function App() {
    return ( 
        <>
        <Router>
        <Navbar></Navbar>
        <Switch>
            <Route path = '/' exact component = {Home}></Route>
        </Switch>
        </Router>
        </>
    );
}

export default App;
