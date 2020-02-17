
import React from 'react';
import { Jumbotron,Container,Row,Col,Image } from 'react-bootstrap';
import Putsadu from '../Images/Icon/putsadu.png'; // Tell Webpack this JS file uses this image
import Inpatient from '../Images/Icon/inpatient.png'; 
import Airoffice from '../Images/Icon/airoffice.png'; 
import Iclaim from '../Images/Icon/iclaim.png'; 
import Carsystem from '../Images/Icon/carsystem.png'; 

export const Home= ()=>(
  <React.Fragment>
  <Jumbotron>
      <Container>
         <h1>โรงพยาบาลอากาศอำนวย ยินดีต้อนรับ</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
   
  </p>
      </Container>
 
</Jumbotron>
 
  <Container>
  <Row>
    <Col>
    
    <Image src={Carsystem} rounded />
    <div className="desc">จองรถออนไลน์</div>
    </Col>
    <Col>
    <Image src={Iclaim} rounded />
    <div className="desc">Iclaim</div></Col>
    <Col>
    <Image src={Airoffice} rounded />
    <div className="desc">Air-Office</div></Col>
    <Col>
    <Image src={Inpatient} rounded />
    <div className="desc">ระบบรายงานจำนวนผู้ป่วยใน
</div></Col>
    <Col>
    <Image src={Putsadu} rounded />
    <div className="desc">คลังพัสดุ</div></Col>
  </Row>

  </Container>


  </React.Fragment>
   
  
  
)


