import { Row, Col, Container, Stack } from 'react-bootstrap';

function ContactUs() {
    return (
        <div>
            <Container>
                <Row style={{
                    marginLeft: "0",
                    marginRight: "0",
                    paddingBottom: "30px"
                }}>
                    <img alt="Gambar orang DAG" src="/Dag_ContactUs.jpeg" style={{
                        paddingLeft: "0",
                        paddingRight: "0"
                    }}></img>
                </Row>
            </Container>
            <Container>
                <Row style={{ paddingBottom: "30px" }}>
                    <Col xs="12" md="6" style={{ color: "#25344E" }}>
                        <Stack>
                            <h1>Contact US</h1>
                            <hr />
                            <div><b>PT. Kencana Dua Sinergi / K2S</b></div>
                            <div>Taman Tekno BSD Sektor XI Blok J-2 No. 1</div>
                            <div>Setu, BSD City Serpong</div>
                            <div>Kota Tangerang Selatan 15314, Indonesia</div>
                            <div>Contact Person   : <b>Klaudia Jeanette </b></div>
                            <div style={{marginLeft:"119px"}}>(+628) 990-015-275</div>
                            <div style={{marginLeft:"119px"}}>klaudia@k2sinergi.com</div>
                            <div style={{marginLeft:"119px"}}><b>Yanto Huang</b></div>
                            <div style={{marginLeft:"119px"}}>(+628) 970-049-065</div>
                            <div style={{marginLeft:"119px"}}>yanto@k2sinergi.com</div>
                            <br></br>
                        </Stack>
                    </Col>
                    <Col xs="12" md="6">
                        <iframe
                            title="Google MAPS DAG"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.440414185289!2d106.6781625143113!3d-6.336955363765199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb3d2aa6c0af%3A0xb9a0981db734fe68!2sGihon%20Telekomunikasi%20Indonesia.%20PT!5e0!3m2!1sen!2sid!4v1637742348872!5m2!1sen!2sid"
                            width="100%" height="100%" style={{ minHeight: "300px", border: "0" }} allowfullscreen="" loading="lazy">
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;