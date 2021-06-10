import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Directions from './Directions';
import Relations from './Relations'
import Leader from './Leader'
import Develop from './Develop'
import Improving from './Improving'
import Accountability from './Accountability'
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
                    <Route path="/develop" component={Develop}/>
                    <Route path="/improving" component={Improving}/>
                    <Route path="/accountability" component={Accountability}/>
                </Switch>
                
                
            </div>
        </Router>
    );
    
}

const About = () => (
    <div className= 'Home'>
       <h1 className="banner">About Me</h1>
        <div className="contents">
            <img className="Jacki" src={Jacki} alt="Jacki Bright" />

            <p className="par1">Hello!  Welcome to my leadership portfolio.  
            I am currently the Deputy Head at MacLachlan College in Oakville, 
            Ontario.  MacLachlan was founded in 1978 and is a co-educational day school 
            including grades PK -12 with a population of just under 350 students.
            </p>

            <p className="par3">My leadership portfolio is my reflection of the skills I gained through various leadership roles I have held  
            that make me a successful leader. I have used this process to take time to look back and reflect on my journey to becoming a leader.  
            To remind myself of the many activities I have developed over the years and to reflect and then look forward to what I can accomplish 
            nearing the end of my career.
            </p>

            <p className="par1">As educators our ultimate goal is student achievement and well-being. As leaders in education we need to be 
                constantly asking ourselves; How can I lead excellent teachers to enhance student achievement and well-being?  
                My leadership portfolio shares the artifacts that I feel best reflect the progress I have made through the 
                process of becoming the Deputy Head at MacLachlan College.  I first started teaching at MacLachlan in September 
                1992.  Throughout those years I earned opportunities to be in various leadership roles. Each role giving me 
                experiences that  played a part in developing my leadership skills.
            </p>
        </div>   
       

       
    </div>

    

)

export default App;