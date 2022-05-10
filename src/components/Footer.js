import * as React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: "#008181" }}>
                <Container>
                    {/* <Row style={{ paddingTop: "20px", color: "white", marginLeft: '10px', marginRight: '10px' }}>
                        <Col xs="12" lg="5" style={{ paddingLeft: "20px" }}>
                            <img src="/logo_dag2.png" width="127px" alt="logo DAG2"></img>
                        </Col>
                    </Row> */}
                    <Row style={{ paddingTop: "30px", paddingBottom: "20px", color: "white", marginLeft: '10px', marginRight: '10px' }}>
                        <Col xs="12" md="12" lg="2" style={{ paddingLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "30px" }}>
                            <img src="/logo_dag2.png" width="127px" alt="logo DAG2"></img>
                        </Col>
                        <Col xs="12" md="8" lg="6" style={{ paddingLeft: "20px" }}>
                            <Stack>
                                <div><b>PT. DWIDAYA AMADEO GEMINTANG / DAG</b></div>
                                <div>Taman Tekno BSD Sektor XI Blok J-2 No. 2</div>
                                <div>Setu, BSD City Serpong</div>
                                <div>Kota Tangerang Selatan 15314, Indonesia</div>
                                <div>Telephone   : (62-21) 758-741-94,</div>
                                <div>Facsimile   : (62-21) 758-805-19</div>
                                <div>Email       : info@dwidaya-ag.com</div>
                                <br></br>
                            </Stack>
                        </Col>
                        <Col xs="6" md="4" lg="4" style={{ paddingLeft: "20px" }}>
                            <Stack>
                                <div><b>About</b></div>
                                <a href="about-us" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Corporate Information</div>
                                </a>
                                <a href="solution" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Solution</div>
                                </a>
                                <a href="contact-us" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Contact Us</div>
                                </a>
                            </Stack>
                        </Col>
                        {/* <Col xs="6" lg="3" style={{ paddingLeft: "20px" }}>
                            <Stack>
                                <div><b>Social Media</b></div>
                                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Linked In</div>
                                </a>
                                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Instagram</div>
                                </a>
                                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                                    <div>Facebook</div>
                                </a>                            
                            </Stack>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            {/* <Row className="text-center" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <Text style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    Website by Kencana 2 Sinergi
                </Text>
            </Row> */}
        </div >
    );
}

export default Footer;