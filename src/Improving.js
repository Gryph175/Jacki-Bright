import React from 'react';
import './Improving.css';
import Classroom from './Classroom.png';
import Practicum from './Practicum-Proposal.png'


function Improving(){
    return(
        <div className='Improving'> 
            <h1 className="banner">Improving Instructional Program</h1>

             <h1 className='Title-2'><a href="https://maclachlanca-my.sharepoint.com/:p:/g/personal/jbright_maclachlan_ca/Edq14AOKPsFPszHCwg80pYgBzZuOkn9nv3eIedqFY0Z8bg?rtime=SF9fK88t2Ug">Practicum from PQP1 - MacLachlan's Teacher Development Program</a></h1>
            <div className='container'>
                <ul>
                <img className="Prac" src={Practicum} alt="Jacki Bright" />
               <img className="Class" src={Classroom} alt="Jacki Bright" />
                
                </ul>
            </div>

            <h1 className='Title-2'>Development of MacLachlan's Staff Handbook & Student Code of Behaviour</h1>
            <div className='container'>
                <ul>
                <p className='par'>To support teachers and staff at MacLachlan, together with the Head of School I am responsible for maintaining and updating the handbook and ensuring it is accessible to all staff.  We also create and adhere to consistent school-wide discipline policies as set out in the Code of Behaviour.</p>
                
                </ul>
            </div>
        </div>
    );
}

export default Improving;