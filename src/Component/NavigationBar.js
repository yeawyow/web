import React from 'react';
import { Nav,Navbar,NavDropdown, Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar{
   margin:20px;
 }
`;
export const NavigationBar = () => (
  <Styles>

<Container>
<Navbar collapseOnSelect expand="lg" bg="" variant="light">
  <Navbar.Brand href="/">โรงพยาบาลอากาศอำนวย</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <Nav.Link href="/">หน้าหลัก</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="เกี่ยวกับเรา" id="collasible-nav-dropdown">
        <NavDropdown.Item href="About">ประวัติความเป็นมา</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">คณะกรรมการบริหาร</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">โครงสร้างหน่วยงาน</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">ข้อมูลหน่วยงาน</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  </Container>
    

  </Styles>
  
)