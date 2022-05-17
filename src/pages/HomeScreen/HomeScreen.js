import * as React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

function HomeScreen() {
    return (
        <div>
            <Container fluid="xxl" style={{
                backgroundImage: "url('/wave.png')",
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(255,255,255,0.7)",
                //left: "-10vw",
                width: "100%",
                height: "100%",
                paddingLeft: "0",
                paddingRight: "0",
            }}>
                <Row style={{
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginBottom: "30px"
                }}>
                    <Col md={{ span: '5', order: 'first' }} xs={{ order: 'last' }}>
                        <h1 style={{ marginTop: '75px', color: "#25344E" }}>
                            To be a Provider of Services and Services on the Best Telecommunications
                        </h1>
                        <a href="about-us" style={{ color: "white", textDecoration: "none" }}>
                            <Button style={{
                                backgroundColor: '#1B8F8F',
                                marginTop: '30px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                width: "30%",
                                borderRadius: "20px",
                                borderColor: "transparent",
                            }}>
                                <h5 style={{ display: "inline-block", margin: "auto", textAlign: "center", textAlignVertical: "center", }}>
                                    About Us
                                </h5>
                            </Button>
                        </a>
                    </Col>
                    <Col md={{ span: '7', order: 'last' }} xs={{ order: 'first' }}>
                        <img src="Others/gambarDashboard2.1.png" alt="Gambar bagus"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                display: "block",
                            }}>
                        </img>
                    </Col>
                </Row>
                <Row style={{ marginLeft: '10px', marginRight: '10px', paddingBottom: "30px" }}>
                    <Col lg="6">
                        <img src="/internet.png" alt="Gambar bagus" style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            display: "block",
                        }}>
                        </img>
                    </Col>
                    <Col lg="6">
                        <h1 style={{ marginTop: '75px', color: "#25344E", textAlign: "right" }}>
                            Our Important Role as Telecommunication Provider
                        </h1>
                        <a href="our-project" style={{ color: "white", textDecoration: "none" }}>
                            <Button style={{
                                float: "right",
                                backgroundColor: '#1B8F8F',
                                marginTop: '30px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                width: "30%",

                                borderRadius: "20px",
                                borderColor: "transparent",
                            }}>
                                <h5 style={{
                                    display: "inline-block",
                                    margin: "auto",
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                }}>
                                    Read More
                                </h5>
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container>
                {/* <Row className="text-center" style={{ color: "#25344E", paddingTop: "20px", paddingBottom: "20px" }}>
                    <h1>
                        Portofolio
                    </h1>
                </Row>
                <Container fluid>
                    <Row>
                        <CardPortofolio imageSource="/Logo/logo_ACN.jpg" portofolioName="PT. Anugrah Creative Nusantara" />
                        <CardPortofolio imageSource="/Logo/logo-GN7.png" portofolioName="PT. Gihon Nusantara Tujuh" />
                        <CardPortofolio imageSource="/Logo/logo-WIN.png" portofolioName="PT. Wahana Infrastruktur Nusantara" />
                        <CardPortofolio imageSource="/Logo/logo-K2S.png" portofolioName="PT. Kencana Dua Sinergi" />
                        {/* <CardPortofolio imageSource="/Logo/logo-GMC.png" portofolioName="GMC" /> *
                    </Row>
                </Container> */}
                <Row className="text-center" style={{ color: "#25344E", paddingTop: "60px", paddingBottom: "20px" }}>
                    <h1>
                        Want to Know More About Us ?
                    </h1>
                </Row>
                <Row style={{ paddingBottom: "20px" }}>
                    <Col>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                            paddingBottom: "20px",
                            marginBottom: "20px",
                            textOverflow: "hidden"
                        }}>
                            <Button
                                style={{
                                    alignContent: "center",
                                    backgroundColor: '#1B8F8F',
                                    marginTop: '30px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    width: "30%",
                                    borderRadius: "20px",
                                    borderColor: "transparent",
                                }}
                                className="justify-content-end"
                                href="/contact-us"
                            >
                                <h5>
                                    Contact Us &nbsp;&nbsp;<FaPhoneAlt size="18px" />
                                </h5>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default HomeScreen;