import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardProject from '../../components/CardProject';

function DigitalPlatform() {
  return (
    <div>
        <Container style={{paddingBottom: "30px", color: "#25344E"}}>
            <Row className="text-center" style={{color: "#1C3451", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "5px"}}>
                    <h1>Digital Platform</h1>
                </Row>
                <Row>
                    <Col sm="12" md="6">
                        <Card body style={{color: "white", background: "#18467D"}}>Reporting Tools untuk Business Unit dan Management Perusahaan</Card>
                    </Col> 
                    <Col sm="12" md="6">
                        <Card body style={{color: "white", background: "#1B62B5"}}>Memudahkan Pengguna Akses Anytime, Anywhere</Card>
                    </Col> 
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#111240", paddingTop: "20px",paddingBottom: "50px", textAlign: 'center' }}>
                <Row style={{ display:'flex', justifyContent:'center' }}>
                    <Col sm="12" md="6">
                        <Card body style={{color: "white", background: "#4272AB"}}>Online Tools untuk proses Project Management, Managed Services, dan Asset Management</Card>
                    </Col> 
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#0F335D", paddingTop: "60px",paddingBottom: "50px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "5px"}}>
                    <h1>Layanan Digital Platform</h1>
                </Row>
                <Col sm="12" md="4">
                    <Card  style={{height: "230px",fontSize: "18px", color: "white", background: "#215189", textAlign:"left"}}>
                        <Card.Body>
                            <Card.Title>Project Management</Card.Title>
                            <Card.Text>Layanan Online Tool untuk perusahaan termasuk BUMN atau BUMD dalam mengelola dan mengontrol proyek</Card.Text>
                        </Card.Body>
                    </Card> 
                </Col> 
                <Col sm="12" md="4">
                    <Card  style={{height: "230px",fontSize: "18px", color: "white", background: "#215189", textAlign:"left"}}>
                        <Card.Body>
                            <Card.Title>Managed Services</Card.Title>
                            <Card.Text>Layanan online tool untuk mengelola pemeliharaan asset perusahaan.<br></br> Baik untuk pemeliharaan dalam hal pencegahan ataupun perbaikan asset</Card.Text>
                        </Card.Body>
                    </Card> 
                </Col> 
                <Col sm="12" md="4" >
                    <Card  style={{height: "230px", fontSize: "18px", color: "white", background: "#215189", textAlign:"left"}}>
                        <Card.Body>
                            <Card.Title>Asset Management</Card.Title>
                            <Card.Text>Layanan online tool untuk mengelola dan verifikasi asset yang dimiliki perusahaan. <br></br><b>Solusi tepat</b> untuk membantu pemberdayaan anggaran perusahaan menjadi lebih efisien</Card.Text>
                        </Card.Body>
                    </Card> 
                </Col> 
            </Row>
            <Row className="text-center" style={{color: "#0F335D", paddingTop: "60px",paddingBottom: "50px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "5px"}}>
                    <h1>Keunggulan Digital Platform</h1>
                </Row>
                <Row>
                    <Col sm="12" md="12">
                        <Card body style={{fontSize: "18px",color: "white", background: "#1B62B5"}}>Keungulan layanan adalah : Fully customizable, yaitu : <br></br>Pembangunan platform dilakukan 100% mengikuti business process & requirement dari customer.</Card>
                    </Col> 
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#363169", paddingTop: "50px",paddingBottom: "5px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "10px"}}>
                    <h1>Pengalaman Proyek</h1>
                </Row>
                <Col>
                    <CardProject imageSource="/Others/asset.png" desc="PT Gihon Telekomunikasi Indonesia" desc2="2020-2021" desc3="Integrated Digital Platform"></CardProject>
                </Col>
                <Col>
                    <CardProject imageSource="/Others/financeOperations.png" desc="PT Wahana Infrastruktur Nusantara" desc2="2020-2021" desc3="Finance Operations" style={{marginLeft:"50px"}}></CardProject>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default DigitalPlatform;