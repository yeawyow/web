import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import {
  faHome,
  faFileContract,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Styles = styled.div`
  background: darkgreen;
  .nav-link {
    color: white !important;
    font-size: 20px;
    margin-right: 20px;
  }
`;

export default function Menu() {
  return (
    <div>
      <Styles>
        <Container>
          <Navbar collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">
                  <FontAwesomeIcon className="fa-lg mr-2" icon={faHome} />
                  หน้าหลัก
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

                {/*} <Nav.Link href="#pricing">ผลงานและนวตกรรม</Nav.Link>{*/}
                <Nav.Link href="ContactUs">
                  <FontAwesomeIcon
                    className="fa-lg mr-2"
                    icon={faAddressBook}
                  />
                  ติดต่อเรา
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Styles>
    </div>
  );
}
