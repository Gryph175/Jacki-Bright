import React from 'react';
import './Improving.css';
import Classroom from './Classroom.png';
import Practicum from './Practicum-Proposal.png'


function Improving(){
    return(
        <div className='Improving'> 
            <h1 className="banner">Improving Instructional Program</h1>

             <h1 className='Title-2'>Practicum from PQP1 - MacLachlan's Teacher Development Program</h1>
            <div className='container'>
                <ul>
                    <img className="Class" src={Classroom} alt="Jacki Bright" />
                    <img className="Prac" src={Practicum} alt="Jacki Bright" />
                    
                <p className='par-improve'>I created a teacher development program that includes regular visits from the Deputy Head into teachers' classrooms and committed to 2 visits per term giving a total of 6 visits per year.  The program is broken down into 2-year cycles with 3-rotations including classroom visits, assessment check-in, sharing of goal setting and implementation of these goals in the classroom through journaling and scheduled classroom visits.  Through regular and consistent visits and meetings I am able to provide instant feedback and suggestions for improved classroom instruction in a constructive manner.  It also allows me to know what is happening within classrooms and share good practices and observations with teachers on staff and celebrate these.</p>
                <p className='par-improve'>I schedule classroom visits and check-ins into my daily calendar.  This has been a way to also get me out of my office with a visible purpose.  Now that I have been doing this for two years staff and students are comfortable with my visiting and popping in.  Now, I often get invited to come and see what's happening in the classroom before I even have to ask!</p>
                </ul>
            </div>

            <h1 className='Title-2'>Development of MacLachlan's Staff Handbook and Student Code of Behaviour</h1>
            <div className='container'>
                <ul>
                <p className='par'>To support teachers and staff at MacLachlan, together with the Head of School I am responsible for maintaining and updating the handbook and ensuring it is accessible to all staff.  We also create and adhere to consistent school-wide discipline policies as set out in the Code of Behaviour.</p>
                
                </ul>
            </div>
        </div>
    );
}

export default Improving;