import * as React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src='Logo/Logo-K2S.png' width="75px" alt="Logo DAG" />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="about-us"><h4 style={{ color: "#25344E", paddingRight: "20px" }}>About Us</h4></Nav.Link>
                            <Nav.Link href="our-project"><h4 style={{ color: "#25344E", paddingRight: "20px"}}>Our Project</h4></Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown" style={{ color: "#25344E", fontSize: "20px"}}>
                                <NavDropdown.Item href="power-solution"><h6 style={{ color: "#25344E", paddingRight: "20px" }}>Power Solution</h6></NavDropdown.Item>
                                {/* <NavDropdown.Item href="battery-mngmnt-system"><h6 style={{ color: "#25344E", paddingRight: "20px" }}>Battery Management System</h6></NavDropdown.Item>
                                <NavDropdown.Item href="digital-platform"><h6 style={{ color: "#25344E", paddingRight: "20px" }}>Digital Platform</h6></NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <a href="contact-us">
                            <Button style={{
                                backgroundColor: "#1B8F8F",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                                borderRadius: "20px",
                                borderColor: "transparent",
                            }} className="justify-content-end">
                                <h5 style={{ display: "inline-block", margin: "auto", textAlign: "center", textAlignVertical: "center", fontSize: "20px", color: "white" }}>Contact Us</h5>
                            </Button>
                        </a> 
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <hr style={{ marginTop: '0' }} />
        </div>
    );
}

export default Header;