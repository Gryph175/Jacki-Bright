import './Relations.css'
import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {Data} from './RelationsData';
import {Data2} from './RelationsData2';

const Relations = () => {

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
                    <h1 className='staff'>Supporting Staff</h1>
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

                    <h1 className='staff'>Modelling the school's values and practices</h1>
                    {Data2.map((item, index) => {
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

export default Relations;