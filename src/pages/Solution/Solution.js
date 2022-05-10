import CarouselSolution from '../../components/CarouselSolution';
import { Container, Row } from 'react-bootstrap';
import CardSolution from '../../components/CardSolution';

function Solution() {
  return (
    <Container>
      <Row>
        <CarouselSolution>
        </CarouselSolution>
      </Row>
      <Row className="text-center center" style={{paddingBottom: "30px", paddingTop: "30px", color: "#25344E"}}>
        <h1>
          Service Provided by DAG
        </h1>
      </Row>
      <Row style={{paddingBottom: "30px"}}>
        <CardSolution imageSource="/Service-PLTS-DAG.jpeg" title="Stabil" desc="lorem ipsum dolor sit amet"/>
        <CardSolution imageSource="/Fiber-Optic-Solution.jpeg" title="Kecepatan Hingga 10 Gbps" desc="lorem ipsum dolor sit amet"/>
        {/* <CardSolution imageSource="/Carousel4.jpeg" title="Hingga pelosok NTT" desc="lorem ipsum dolor sit amet"/> */}
      </Row>
    </Container>
  );
}

export default Solution;