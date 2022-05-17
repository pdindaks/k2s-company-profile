import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

function BatteryManagementSystem() {
  return (
    <div>
        <Container style={{paddingBottom: "30px", color: "#25344E"}}>
            <Row className="text-center" style={{color: "#AB2031", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Battery Management System </h1>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#921120"}}>Memanajemen Baterai Isi Ulang </Card>
                    </Col> 
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#972836"}}>Pengelolaan Charging / Discharging</Card>
                    </Col> 
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#D52B40"}}>Melindungi Kelebihan daya</Card>
                    </Col> 
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#111240", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row>
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#D82339",}}>Penyeimbang Daya</Card>
                    </Col> 
                    <Col sm="12" md="4" style={{paddingLeft: "20px"}}>
                        <Card body style={{color: "white", background: "#D83E50"}}>Mengatur Suhu Baterai</Card>
                    </Col> 
                    <Col sm="12" md="4" style={{paddingLeft: "20px"}}>
                        <Card body style={{color: "white", background: "#DA5666"}}>Memperpanjang Life Cycle Baterai</Card>
                    </Col> 
                </Row>
            </Row>
            
            <Row className="text-center" style={{color: "#AB2031", paddingTop: "50px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Layanan Battery Management System</h1>
                </Row>
                <Col sm="12" md="12" >
                    <Card body style={{fontSize: "18px", color: "white", background: "#974852"}}>BMS atau Battery Management System adalah produk yang berupa sebuah sistem elektronik yang berfungsi untuk pengelolaan baterai isi ulang</Card>
                </Col> 
            </Row>

            <Row className="text-center" style={{color: "#AB2031", paddingTop: "50px",paddingBottom: "5px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Keunggulan</h1>
                </Row>
                <Col sm="12" md="12" >
                    <Card body style={{fontSize: "18px", color: "white", background: "#C83F4F", textAlign: 'left'}}>
                        Memiliki keunggulan menjaga umur baterai bertahan lama dan mengoptimalkan kinerja baterai dengan teknologi:<br></br>
                        1. Pengaturan suhu baterai<br></br>
                        2. Pengelolaan sistem charge/discharge<br></br>
                        3. Kemampuan penyeimbangan perbedaan daya tiap - tiap cell baterai
                    </Card>
                </Col> 
            </Row>
        </Container>
       
    </div>
  );
}

export default BatteryManagementSystem;