import React, {useState} from 'react';
import {Data} from './Data';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import './Accordion.css';



const Accordion = () => {

const [clicked, setClicked] = useState(false)

const toggle = index => {
    if(clicked === index) {
        return setClicked(null)
    }

    setClicked(index)
}

    return (
        <IconContext.Provider value={{ color: 'rgb(147, 46, 241)', size: '25px'}}>
            <div className="AccordionSection">
                <div className="Container">
                    {Data.map((item, index) => {
                        return (
                            <>

                            <div className="Wrap" onClick={() => toggle(index)} key={index}>
                                <h1 className="title">{item.title}</h1>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </div>

                            {clicked === index ? (
                                <div className="Dropdown">
                                    <p>{item.contents}</p>
                                </div>
                            ) : null}
                            
                                 
                            </>
                        )
                    })}
                </div>
                
            </div>
            
        </IconContext.Provider>
    );
};

export default Accordion
