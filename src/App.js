import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Directions from './Directions';
import Relations from './Relations'
import Leader from './Leader'
import More from './More'
import Jacki from './Jacki.jpeg'

function App(){
    return(
        <Router>
            <div className="App">
                <Navbar/>


                <Switch>
                    <Route path="/" exact component={About}/>
                    <Route path="/directions" component={Directions}/> 
                    <Route path="/relations" component={Relations}/>
                    <Route path="/leader" component={Leader}/>
                    <Route path="/more" component={More}/>
                </Switch>
                
                
            </div>
        </Router>
    );
    
}

const About = () => (
    <div className= 'Home'>
       <h1 className="banner">About Me</h1>

       <img className="Jacki" src={Jacki} alt="Jacki Bright" />

        <p className="par1">Hello!  Welcome to my leadership portfolio.  
           I am currently the Deputy Head at MacLachlan College in Oakville, 
           Ontario.  MacLachlan was founded in 1978 and is a co-educational day school 
           including grades PK -12 with a population of just under 350 students.
        </p>

        <p className="par2">While working through the creation of this portfolio, I realized that all of my leadership artifacts 
            fell into 2 categories of the Ontario Leadership Framework, Building Relationships and Setting Direction. 
            My first reflection of this had me thinking I was really deficient in being a true leader.  However, as I 
            continued to reflect I came to realize that a good leader understands that they cannot be great at everything 
            and there is a need to create a leadership team that compliments and supports one another.
        </p>

        <p className="par1">As educators our ultimate goal is student achievement and well-being. As leaders in education we need to be 
            constantly asking ourselves; How can I lead excellent teachers to enhance student achievement and well-being?  
            My leadership portfolio shares the artifacts that I feel best reflect the progress I have made through the 
            process of becoming the Deputy Head at MacLachlan College.  I first started teaching at MacLachlan in September 
            1992.  Throughout those years I earned opportunities to be in various leadership roles. Each role giving me 
            experiences that  played a part in developing my leadership skills.
        </p>

       
    </div>

    

)

export default App;