import { Row, Col, Container } from 'react-bootstrap';
import { Text } from 'react-native';
import CardPortofolio2 from '../../components/CardPortofolio2';

function AboutUs() {
  return (
    <div>
      <Container fluid="xxl">
        <div style={{
          backgroundImage: "url('/city1.jpg')",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          height: "60vh",
          width: "100%",
          filter: "blur(5px)",
        }}>
        </div>
        <div>
          <Row style={{
            paddingBottom: "30px",
          }}>
            <div style={{
              position: "absolute",
              top: "35vh",
              left: 0,
              right: 0,
              color: "white",
              textAlign: "center",
              height: "max-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              <h3>
                About Us
              </h3>
              <br />
                <h5>
                  Didirikan pada 29 Juli 2008 di Jakarta
                  dengan bisnis utama berupa investasi dan
                  manajemen aset dalam bidang <br/>Ekuitas, Infrastruktur,
                  Telekomunikasi, Power Solution, PLTS, Fiber Optik, dll.
                </h5>
            </div>
          </Row>
        </div>
      </Container>
      <Container style={{ paddingBottom: "30px", color: "#25344E" }}>
        <Row className="text-center" style={{ color: "#25344E", paddingTop: "20px", paddingBottom: "20px" }}>
          <h1>
            Portofolio Investasi
          </h1>
        </Row>
        <Row className="center">
          <Col sm="12" md="6">
            <CardPortofolio2 imageSource="/Logo/Logo-K2S.png" companyName="PT. Kencana Dua Sinergi" desc="Platform Webstite, Mobile Apps Project Management, Asset Management, Managed Service, LMS, dan E-learning." />
            <CardPortofolio2 imageSource="/Logo/Logo-GN7.png" companyName="PT. Gihon Nusantara Tujuh" desc="Power Solution, PLTS, dan Baterai." />
          </Col>
          <Col sm="12" md="6">
            <CardPortofolio2 imageSource="/Logo/Logo-WIN.png" companyName="PT. Wahana Infrastruktur Nusantara" desc="Infrastruktur dan konstruksi." />
            <CardPortofolio2 imageSource="/Logo/Logo_ACN.jpg" companyName="PT. Anugrah Creative Nusantara" desc="Koperasi, BPR." />
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingBottom: "50px", color: "#25344E" }}>
        <Row className="text-center center">
          <Col sm="12" md="6" style={{ paddingBottom: "50px" }}>
            <Row>
              <h1>Vision</h1>
            </Row>
            <Row>
              <Text>Menjadi perusahaan manajemen aset dan investasi terbaik dan berkarakter
                kuat di Indonesia untuk menciptakan nilai bagi bangsa.
              </Text>
            </Row>
          </Col>
          <Col sm="12" md="6">
            <Row>
              <h1>Mission</h1>
            </Row>
            <Row>
              <Text>Menawarkan dan menyediakan jasa layanan infrastruktur serta investasi
                secara profesional, transparan, berkomitmen dan bercitra baik.
              </Text>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingBottom: "30px", color: "#25344E" }}>
        <Row className="text-center center">
          <h1>
            Our Journey
          </h1>
        </Row>
        <Row>
          <Col md="2">
          </Col>
          <Col md="8">
            <img alt="History DAG" src="DAG_Journey.png" style={{ width: "100%", paddingLeft: "0", paddingRight: "0" }}></img>
          </Col>
          <Col nd="2">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;