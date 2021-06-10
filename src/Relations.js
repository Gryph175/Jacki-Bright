import './Relations.css';
import StaffAgenda from './StaffAgenda.png';

import Collage from './BeFunky-collage.jpg'
import React from 'react';



const Relations = () => {
    return(
        <div>
            <h1 className="banner">Building Relationships</h1>

            <h1 className='Title'>Supporting Staff Through...</h1>
            <div className='container'>
                <ul>
                <li className="dot">Development and Ongoing Implementation of MacLachlan's New Teacher Orientation Days</li>
                <img className="Staff" src={StaffAgenda} alt="Staff" />
                <p className='par'>Building relationships with staff is key and begins immediately.  I developed the MacLachlan New Teacher Orientation Program and continue to be a part of the team to deliver the workshops over two days in August.</p>
                <li className="dot"> Encouraging Professional Development</li>
                <p className='par'>I present a budget to the Board for staff PD and encourage all staff to participate in continued PD to encourage new practices that match their interests and the school's goals.  Some of these have included PYP Workshops, Levels 1, 2 & 3, Cohort 21, Harvard's Project Zero and CIS Workshops.</p>
                <li className="dot">Meetings & Conferences</li>
                <p className='par'>I meet with teachers in several different ways, staff, divisional, grade and committee meetings are scheduled throughout the school year and each of those schedules are set in August prior to the start of that school year.  Individual meetings are made as needed and my door is always open.</p>
                </ul>
            </div>

            <h1 className='Title'>Modelling the school's values and practices Through...</h1>
            <div className='container'>
                <ul>
                <li className="dot">Participating in School Events and School Life</li>
                <p className='par'>I do not lead from my office.  I lead by example.  I start every day with morning door duty and greet every student by name as they enter the building.  I also end the day with traffic duty to say good-bye to students as they leave for the day.  I am highly visible in school events including Galas, Fun Fairs, Spirit Days and Student Staff sports.</p>
                <img className="Collage" src={Collage} alt="FloorHockey" />
                <li className="dot">Continued Love of Learning</li>
                <p className='dot'>Learning never ends and I continue to expand my knowledge through...</p>
                <p className='dot2'>AQ courses</p>
                <li className="par2">Senior Division, Mathematics / August 1995</li>
                <li className="par2">Guidance, Part 1 / July 2000</li>
                <li className="par2">Guidance, Part 2 / April 2001</li>
                <li className="par2">Guidance, Specialist / April 2002</li>
                <li className="par2">Primary Division / December 2009</li>
                <li className="par2">Primary Education, Part 1 / March 2010</li>
                <li className="par2">Primary Education, Part 2 / December 2010</li>
                <li className="par2">Primary Education, Specialist / April 2011</li>
                <li className="par2">Principal's Qualification, Part 1 / October 2019</li>
                <p className='dot2'>IB Workshops</p>
                <li className="par2">Making the PYP Happen, July 2007</li>
                <li className="par2">Developing a POI, June 25-26, 2008</li>
                <li className="par2">IB Community Theme, TYS, Oct. 22/08</li>
                <li className="par2">Inquiry in the PYP, level 2, Oct.2010</li>
                <li className="par2">Pedagogical Leadership 2, August 2010</li>
                <li className="par2">Developing a CI & L of I (Maxine Bone), June 21/11</li>
                <li className="par2"> Assessment in the PYP, Level 2,July 2011</li>
                <li className="par2">IBSO PD, Oct.26, 2011</li>
                <li className="par2">Teaching Language through Inquiry, May 19, 2012</li>
                <li className="par2">Building International Mindedness into the Curriculum, Oct.16, 2012</li>
                <li className="par2">Concept Based Teaching, Nov. 8, 2013, MacLachlan College</li>
                <p className='dot2'>Other Workshops</p>
                <li className="par2">Barbara Coloroso, January 2005</li>
                <li className="par2">Connected Math, February 2006</li>
                <li className="par2">Lyn Erikson, January 2008</li>
                <li className="par2">Inquiry Based Teaching, February 12, 2010</li>
                <li className="par2">Teaching ELL, October 7, 2011</li>
                <li className="par2">IT Workshop - MPAC and Smart Board Features (Sept 2012)</li>
                <li className="par2">Curriculum Leaders Workshop, October 2012</li>
                <li className="par2">Curriculum Leaders Workshop, October 2013</li>
                <li className="par2">Assessment through “Growing Success”, continuous from 2011-2013</li>
                <li className="par2">ReBoot with Wake Up Kate Mindfulness training workshop, Dec. 17th, 2015</li>
                <li className="par2">CIS Unconference January 28th, 2019</li>
                


                </ul>
            </div>
            

        </div>
        


    );

};

export default Relations;