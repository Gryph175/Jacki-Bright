import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Directions from './Directions';
import Relations from './Relations'
import Leader from './Leader'
import More from './More'

function App(){
    return(
        <Router>
            <div className="App">
                <Navbar/>


                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/directions" component={Directions}/> 
                    <Route path="/relations" component={Relations}/>
                    <Route path="/leader" component={Leader}/>
                    <Route path="/more" component={More}/>
                </Switch>
                
                
            </div>
        </Router>
    );
    
}

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)

export default App;