import React from 'react';
import './Leader.css';


function Leader(){
    return(
        <div className='Leader'>
            
            <h1 className="banner">Leadership Log</h1>


            <div className="even">
                <h2>1999 - Head of Science, Lower School</h2>
            </div>
            
            
            <div className="odd">
                <h2>2000 - Head of Guidance</h2>

                <ul>
                    <li >Created and presented Study Skills Workshop for students and parents annually</li>
                    <li >Organized University & College Information Evenings</li>
                    <li >Liaised with universities and colleges</li>
                    <li >Developed and delivered New Teacher Orientation Program</li>
                </ul>
            </div>
            
            <div className="even">
                <h2>2006 - Assistant Head of LS & 2009 - PYP Coordinator</h2>

                <ul>
                    <li >Contributing team member of the strategic planning team</li>
                    <li >???? Lead staff during the candidate phase of becoming an IB World School</li>
                    <li >Workshop leader at the IB Conference of Americas in Chicago</li>
                </ul>
            </div>
            
            <div className="odd">
                <h2>2012 - Deputy Head of School</h2>

                <ul>
                    <li >Leader in developing strategic pillars</li>
                    <li >Developed and implemented Mac’s  Teacher Development Program</li>
                    <li >Intake of new students</li>
                    <li >Recruiting and developing staff</li>
                </ul>
            </div>
            
            
        </div>
    );
}

export default Leader;