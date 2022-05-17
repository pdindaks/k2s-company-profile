import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {FaClock,FaSearchLocation} from "react-icons/fa";
//import CompanyPS from "/Logo/powersolution.png";
//import jshj from './powersolution.png';

function PowerSolution() {
  return (
    <div>
        <Container style={{paddingBottom: "30px", color: "#25344E"}}>
            <Row className="text-center" style={{color: "#FC9F06", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Power Solution</h1>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#785926"}}>Menggunakan Teknologi Tenaga Surya</Card>
                    </Col> 
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#8A6527"}}>Rendah Emisi, Energi Terbarukan</Card>
                    </Col> 
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#AC7C2E"}}>Instalasi Mudah, Rendah Biaya</Card>
                    </Col> 
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#111240", paddingTop: "20px",paddingBottom: "20px", textAlign: 'center' }}>
                <Row style={{paddingLeft: "150px"}}>
                    <Col sm="12" md="4">
                        <Card body style={{color: "white", background: "#B6893E",}}>Penggunaan Jangka Panjang</Card>
                    </Col> 
                    <Col sm="12" md="6" style={{paddingLeft: "20px"}}>
                        <Card body style={{color: "white", background: "#D49936"}}>Layanan Untuk Sektor Telekomunikasi dan Industri</Card>
                    </Col> 
                </Row>
            </Row>
            <br></br><br></br>
            <Row className="text-center" style={{color: "#FC9F06", paddingTop: "20px",paddingBottom: "5px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Layanan Power Solution</h1>
                </Row>
            </Row>
            <div className="text-center">
                <Table bordered style={{
                            border:'1px solid black',
                            textAlign:'center',
                           }}>
                    <thead style={{color: "white", background: "#D49936"}}>
                        <tr>
                            <th>On Grid</th>
                            <th>Off Grid</th>
                            <th>Hybrid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Penggunaan di area perkotaan</th>
                            <th>Penggunaan untuk daerah yang minim dari jangkauan PLN</th>
                            <th>Gabungan teknologi On Grid dan Off Grid</th>
                        </tr>
                        <tr>
                            <th>Efisiensi Biaya Listrik</th>
                            <th>Baterai ramah lingkungan</th>
                            <th>Penyediaan energi listrik yang optimal sekaligus antisipasi saat terjadi kekurangan daya atau pemadaman dari PLN</th>
                        </tr>
                        <tr>
                            <th>Perangkat utama : Panel Surya, Inverter (untuk resident dan perkantoran, Rectifier (untuk BTS Telco)</th>
                            <th>Perangkat utama : Panel Surya & Baterai</th>
                            <th>Perangkat utama : Panel Surya, Baterai, Inverter atau Rectifier, PLN atau Genset</th>
                        </tr>    
                    </tbody>
                    
                </Table>
            </div>
            <Row className="text-center" style={{color: "#FC9F06", paddingTop: "50px",paddingBottom: "40px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Keunggulan</h1>
                </Row>
                <Col sm="12" md="12" >
                        <Card body style={{fontSize: "18px", color: "white", background: "#D49936"}}>Keunggulan Layanan menyeluruh meliputi : Survey, Perijinan, Perencanaan dan Desain, Instalasi, Pengoperasian dan Pengelolaan</Card>
                </Col> 
            </Row>
            <Row className="text-center" style={{color: "#FC9F06", paddingTop: "50px",paddingBottom: "5px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "5px"}}>
                    <h1>Pengalaman Proyek</h1>
                </Row>
                <Row>
                    <Col sm="12" md="6" >
                        <Card body style={{fontSize: "22px", color: "white", background: "#EA9D1C"}}><FaClock /> 2019-2021</Card>
                    </Col> 
                    <Col sm="12" md="6" >
                        <Card body style={{fontSize: "22px", color: "white", background: "#EA9D1C"}}><FaSearchLocation /> Papua, Papua Barat, Maluku, Maluku Utara</Card>
                    </Col> 
                </Row>
                <Row>
                    <Col sm="12" md="6">
                        <img src="/Logo/powersolution.png" alt="BigCo Inc. logo"/>
                    </Col>
                    <Col sm="12" md="6">
                        <h1 style={{color: "black", textAlign: "left", paddingTop: "25px"}}>Total : 177 Lokasi</h1>
                    </Col>
                </Row>
            </Row>
            <Row className="text-center" style={{color: "#FC9F06", paddingTop: "50px",paddingBottom: "40px", textAlign: 'center' }}>
                <Row style={{paddingBottom: "20px"}}>
                    <h1>Lingkup Kerja</h1>
                </Row>
                <Col sm="12" md="12" >
                        <Card body style={{fontSize: "18px", color: "white", background: "#D49936"}}>Lingkup pekerjaan terdiri dari survey, pengurusan perijinan dan IMB, Pemasangan Tower dan Power, Integrasi, Test dan Commissioning, Operational dan Pemeliharaan, Network Monitoring System (NMS)</Card>
                </Col> 
            </Row>
        </Container>
        
    </div>
  );
}

export default PowerSolution;