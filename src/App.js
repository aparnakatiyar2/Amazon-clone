import './App.css';
import Header from './Header';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Checkout from "./Checkout";
  import Login from "./Login";

function App() {
    return ( 
        //BEM
        <Router>
        <div className = "App" >
        
        
        <Switch>
            <Route path="/login">
                <h1>Login page</h1>

        <Login/>
        </Route>
            <Route path="/checkout">
        
         <Header/>
        <Checkout/>
        </Route>
            <Route path="/">
        
        <Header/>
        <Home />
        </Route>
        </Switch>
        </div>
        </Router>
    );
}

export default App;