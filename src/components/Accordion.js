import React, {useState} from 'react';
import {Data} from './Data';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';

const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
height: 100vh;
background: white;
`;
const Container = styled.div`
position: absolute;
width: 100%;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
const Wrap = styled.div`
background: rgb(147, 46, 241);
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
width: 100%;
cursor: pointer;

h1{
    padding: 2rem;
    font-size: 2 rem;
}

span {
    margin-right: 1.5rem;
}
`;

const Dropdown = styled.div`
background: #1c1c1c;
color: #FFFF;
width: 100%;
height: 100px;
display: flex;
flex-direction: coolumn;

`;


const Accordion = () => {

const [clicked, setClicked] = useState(false)

const toggle = index => {
    if(clicked === index) {
        return setClicked(null)
    }

    setClicked(index)
}

    return (
        <IconContext.Provider value={{ color: '00FFB9', size: '25px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.title}</h1>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>

                            {clicked === index ? (
                                <Dropdown>
                                <p>{item.contents}</p>
                                </Dropdown>
                            ) : null}
                            
                                 
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion
