import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Biography from './Biography';
import Resume from './Resume'
import Leader from './Leader'
import More from './More'

function App(){
    return(
        <Router>
            <div className="App">
                <Navbar/>


                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/biography" component={Biography}/>
                    <Route path="/resume" component={Resume}/>
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