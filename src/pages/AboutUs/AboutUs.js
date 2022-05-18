import { Row, Col, Container } from 'react-bootstrap';
import { Text } from 'react-native';
import CardPortofolio2 from '../../components/CardPortofolio2';
import CardStrategy from '../../components/CardStrategy';

function AboutUs() {
  return (
    <div>
      <Container fluid="xxl">
        <div style={{
          backgroundImage: "url('/Others/bckgrndAboutUs.jpg')",
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
              <h1>
                About Us
              </h1>
              <br />
                <h5 style={{backgroundColor: 'white',color: "black",}}>
                  Didirikan pada 15 November 2019 di Tangerang Selatan
                  dengan bisnis utama berupa investasi aset dalam bidang
                  <br/>Ekuitas, Infrastruktur,
                  Telekomunikasi, Power Solution, PLTS, Fiber Optik, dll.
                </h5>
            </div>
          </Row>
        </div>
      </Container>
      <Container style={{ paddingBottom: "30px", color: "#25344E", backgroundColor:"#DCDCDC", }}>
        <Row className="text-center" style={{ color: "#25344E", marginTop: "50px", paddingTop: "20px", paddingBottom: "20px" }}>
          <h1>
            Investasi Sektor Utama
          </h1>
        </Row>
        <br></br>
        <Row className="center">
          <Col sm="12" md="6">
            <CardPortofolio2 imageSource="/Logo/Logo-gihon.jpg" companyName="PT Gihon Telekomunikasi Indonesia Tbk" desc="Pembangunan Menara Telekomunikasi, SITAC, CME, dan Operational Maintenance" />
            <br></br>
            <CardPortofolio2 imageSource="/Logo/Logo_DAG.png" companyName="PT Dwidaya Amadeo Gemintang" desc="Data Center, Properti, dan Ekuitas" />
          </Col>
          <Col sm="12" md="6">
            <CardPortofolio2 imageSource="/Logo/Logo-WIN.png" companyName="PT Wahana Infrastruktur Nusantara" desc="EPC (Engineering Procurement Construction) dan Power Solution untuk EBT (Energi Baru Terbarukan) - PLTS" />
            <br></br><br></br>
            <CardPortofolio2 imageSource="/Logo/logo-glj.png" companyName="PT Gihon Lima Jaya" desc="Fiber Optik - FTTH, 5G VPN dan In Building Solution (IBS)" />
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container style={{paddingBottom: "30px", color: "#25344E", backgroundColor:"#F8F8FF"}}>
        <Row className="text-center" style={{color: "#111240", marginTop: "50px", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center'}}>
          <Row>
            <h1>Strategi Bisnis</h1>
          </Row>
        </Row>
        <p style={{marginLeft: "50px"}}>Menawarkan investasi yang mendukung semua aspek secara:</p>
        <Row className="center" style={{marginLeft: "20px"}}>
          <Col sm="12" md="4">
            <CardStrategy imageSource="/Strategi-Bisnis/mandiri.jpg" desc="Independent/Mandiri"></CardStrategy>
          </Col>
          <Col sm="12" md="4">
            <CardStrategy imageSource="/Strategi-Bisnis/integritas.jpg" desc="Integrity/Integritas"></CardStrategy>
          </Col>
          <Col sm="12" md="4">
            <CardStrategy imageSource="/Strategi-Bisnis/inovasi.jpg" desc="Inovation/Inovasi"></CardStrategy>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br>
      <Container style={{ paddingTop: "20px",paddingBottom: "20px", color: "#25344E", backgroundColor:"#FDF5E6",marginBottom:"30px", }}>
        <Row className="text-center center">
          <Col sm="12" md="6" style={{ paddingBottom: "50px"}}>
            <Row>
              <h1>Vision</h1>
            </Row>
            <Row>
              <Text style={{fontSize: 20}}>Menjadi 
                <Text style={{fontWeight: "bold", fontSize: 20}}> manajemen pengelola investasi aset terbaik di Indonesia</Text>
                <Text style={{fontSize: 20}}> serta mendukung program pemerintah untuk pemerataan pembangunan.</Text>
              </Text>
            </Row>
          </Col>
          <Col sm="12" md="6">
            <Row>
              <h1>Mission</h1>
            </Row>
            <Row>
              <Text style={{fontSize: 20}}>Melayani manajemen investasi aset baik perusahaan maupun individu dengan berkomitmen 
                <Text style={{fontSize:20, fontWeight: "bold"}}> menghargai dan melindungi kepentingan mitra atau pelanggan.</Text>
              </Text>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Container style={{ paddingBottom: "30px", color: "#25344E" }}>
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
      </Container> */}
    </div>
  );
}

export default AboutUs;