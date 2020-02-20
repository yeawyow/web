import React from 'react';
import {Jumbotron as Jumbo,Container} from 'react-bootstrap';
import styled from 'styled-components';
import hosband from '../Component/Images/hosband.jpg';

const Styles = styled.div`
 .jumbo{
  background:url(${hosband}) no-repeat fixed bottom;
  background-size:cover;
  height: 350px;
  position:relative;
  z-index:-2;
 }
 color:white;
`;
export const Jumbotron = ()=>(
  <Styles>
    <Jumbo fluid className="jumbo">

      <Container>
         <h1>โรงพยาบาลอากาศอำนวย ยินดีต้อนรับ</h1>
  <p>
    
  </p>
  <p>
   
  </p>
      </Container>
 
</Jumbo>
  </Styles>


)
