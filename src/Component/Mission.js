import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
ul {
    list-style-type:none;
    
  }
  
   `;
export const Mission =()=>(
   
   
    <Container>
        <Styles>
        <hr></hr>
            <div>
       <h2>
           พันธกิจ (Mission)
       </h2>
       <p>
          <ul>
              <li>1.พัฒนาระบบบริการทั้งเชิงรุก เชิงรับให้ได้
              </li>
              <li>2.พัฒนาโรงพยาบาล
              </li>
              <li>3.พัฒนาทักษะของบุคลากรตามมาตรฐานวิชาชีพและการบริการ
              </li>
          </ul> 
       </p>
   </div>
        </Styles>
  
์<hr></hr>
    </Container>
    
)

 

