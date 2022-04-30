// import React from 'react';
// import './FAQ.js';
// import {AiOutlineMinus} from 'react-icons/ai';
// import {AiOutlinePlus} from 'react-icons/ai';

import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:5rem;
  justify-content: center;
  position: relative;
  height: 100vh;
  h2{
    color:#fff;
    font-size:2rem;
    text-align:center;
  }
  // background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 20%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.7rem;
    color: white;
  }
  span {
    margin-right: 1.5rem;
  }
`;


const Dropdown = styled.div`
  background: #1c1c1c;
  color: #D9534F;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D9534F;
  border-top: 1px solid #D9534F;
  p {
    font-size: 1.5rem;
  }
`;





const FQA = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
    return (

        <IconContext.Provider value={{ color: '#D9534F', size: '25px' }}>

          <AccordionSection id='fqa'>
          <header>
             <h2>F.A.Q</h2>
            </header>
            <Container>
 
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      );
};
export default FQA;

// function FAQ() {
//     return (
//             <section>
//                 <div className='container'>
//                     <div className='according'>
//                         <div className='according-item' id='question1'>
//                             <a className='according-link' href='question1'>
//                                 How often do you???/
//                                 <i className='according-link__i ion-md-add'  ><AiOutlinePlus/></i>
//                                 <i className='according-link__i ion-md-remove' ><AiOutlineMinus/></i>
//                             </a>
//                             <div className='answer'>
//                              <p> Hey homies! Wondering WTF is an NFT and why is everyone talking about it? Let’s explore it together!</p>
//                             </div>
//                         </div>


//                         <div className='according-item' id='question2'>
//                             <a className='according-link' href='question2'>
//                                 How often do you???/
//                                 <a className='according-link__i ion-md-add'  ><AiOutlinePlus/></a>
//                                 <a className='according-link__i ion-md-remove' ><AiOutlineMinus/></a>
//                             </a>
//                             <div className='answer'>
//                             <p> Hey homies! Wondering WTF is an NFT and why is everyone talking about it? Let’s explore it together!</p>
//                             </div>
//                         </div>


//                         <div className='according-item' id='question3'>
//                             <a className='according-link' href='question3'>
//                                 How often do you???/
//                                 <a className='according-link__i ion-md-add'  ><AiOutlinePlus/></a>
//                                 <a className='according-link__i ion-md-remove' ><AiOutlineMinus/></a>
//                             </a>
//                             <div className='answer'>
//                             <p> Hey homies! Wondering WTF is an NFT and why is everyone talking about it? Let’s explore it together!</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>
//         );
//     }
    
    // export default FAQ;
