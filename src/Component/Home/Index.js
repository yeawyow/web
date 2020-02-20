
import React from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';

import Putsadu from '../Images/Icon/putsadu.png'; // Tell Webpack this JS file uses this image
import Inpatient from '../Images/Icon/inpatient.png'; 
import Airoffice from '../Images/Icon/airoffice.png'; 
import Iclaim from '../Images/Icon/iclaim.png'; 
import Carsystem from '../Images/Icon/carsystem.png'; 



export const Home= ()=>(
  <React.Fragment>
  
 
   <Container>
  <Row>
    
    <Col>
      <a  href="http://akathospital.com/carsystem"  rel=" noopener noopener">
    <Image src={Carsystem} rounded /></a>
    <div className="card2">จองรถออนไลน์</div>
    </Col>
    
    
    
    <Col>
    <a href="http://akathospital.com/iclaim"   rel=" noopener noopener">
    <Image src={Iclaim} rounded /></a>
    <div className="desc">Iclaim</div>
    
    </Col>
    <Col>
    <a href="http://akathospital.com/airoffice"  rel="noopener noopener">
    <Image src={Airoffice} rounded /></a>
    <div className="desc">Air-Office</div>
    
    </Col>
    <Col>
    <a href="http://akathospital.com/inpatient"   rel="noopener noopener">
    <Image src={Inpatient} rounded /></a>
    <div className="desc">ระบบรายงานจำนวนผู้ป่วยใน
</div>

</Col>
    <Col>
    <a href="http://google.com"  rel="noopener noopener">
    <Image src={Putsadu} rounded /></a>
    <div className="desc">คลังพัสดุ</div>
    
    </Col>
    
  </Row>

  </Container>
 

  </React.Fragment>
   
  
  
)


