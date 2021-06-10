import React from 'react';
import Accordion from './components/Accordion';
import './Directions.css';
import PYP from './PYP.png'

function Directions(){
    return(
        <div className='directions'>
            
            <h1 className="banner">Setting Direction</h1>
            <div className="img_contain">
                <img className="pyp" src={PYP} alt="PYP" />
            </div>
            


            <Accordion/>
            

            
        </div>
    );
}

export default Directions;