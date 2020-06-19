import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import styled from "styled-components";
import logohos from "./Images/logohos.png";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .navbar {
    margin: 10px;
  }
  .nav-link {
    margin: 20px;
  }
  .thumbnail {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Navbar.Brand href="/">
        <Image className="thumbnail" src={logohos} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">
            {" "}
            <FontAwesomeIcon className="fa-lg" icon={faHome} />
          </Nav.Link>
          <NavDropdown title="เกี่ยวกับเรา" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/vision">
              วิสัยทัศน์ พันธกิจ ค่านิยม
            </NavDropdown.Item>
            <NavDropdown.Item href="/Basicinformation">
              ข้อมูลพื้นฐาน
            </NavDropdown.Item>
            <NavDropdown.Item href="/history">
              ประวัติโรงพยาบาล
            </NavDropdown.Item>
            <NavDropdown.Item href="/directors">
              คณะกรรมการบริหาร
            </NavDropdown.Item>
            {/*}   <NavDropdown.Item href="ValuesM">ค่านิยม (Values)</NavDropdown.Item>{*/}

            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/div[F8ilihk.pdf">
              กรอบโครงสร้างหน่วยงาน
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="เอกสารเผยแพร่" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/czop6mTLk9iN.pdf">
              แผนยุทธศาสตร์ชาติ 20 ปี
            </NavDropdown.Item>
            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/0ibpTii.pdf">
              พระราชบัญญัติมาตรฐานทางจริยธรรม พ.ศ. 2562
            </NavDropdown.Item>
            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/czop6mTdd.pdf">
              เผยแพร่แผ่นพับยุทธศาสตร์
            </NavDropdown.Item>
            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/dfifdos.pdf">
              ข้อบังคับจรรยาข้าราชการสำนักงานปลัดกระทรวงสาธารณสุขพ.ศ.2560
            </NavDropdown.Item>
            <NavDropdown.Item href="http://akathospital.com/airoffice/indicator_app/modules/docpup2/uploads/dfwwdfse.pdf">
              ประมวลจริยธรรมข้าราชการพลเรือน
            </NavDropdown.Item>
            <NavDropdown.Item href="/docpup2">
              แผนจัดซื้อจัดจ้าง
            </NavDropdown.Item>
            <NavDropdown.Item href="/directors">
              ช่องทางการร้องเรียน
            </NavDropdown.Item>
            <NavDropdown.Item href="/structurehos">
              คู่มือการปฏิบัติงาน
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          {/*}  <Nav.Link href="/DocPup2">เอกสารเผยแพร่</Nav.Link>{*/}

          <Nav.Link href="#pricing">ผลงานและนวตกรรม</Nav.Link>
          <Nav.Link href="ContactUs">ติดต่อเรา</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
