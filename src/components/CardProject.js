import React from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from 'react-native';

function CardProject(props) {

    return (
        <Row style={{ paddingBottom: "30px" }}>
            {/* <Col sm="12" lg="12" md="6"> */}
            <Col sm="12" md="12">
                <Row>
                    <Text style={{
                        paddingLeft: "100px",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#130f3b",}}>{props.desc}</Text>
                </Row>
                <Row>
                    <Text style={{
                        paddingLeft: "100px",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#130f3b",}}>{props.desc2}</Text>
                </Row>
                <Row>
                    <Text style={{
                        paddingLeft: "100px",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#130f3b",}}>{props.desc3}</Text>
                </Row>
                <img style={{
                    height: "250px",
                    display: "block",
                    marginLeft: "50px",
                    flex: 0.3,
                    borderRadius: 8,
                    alignContent: "center",
                    }}
                    alt="ilutrasi strategi"
                    src={props.imageSource}>
                </img>
            </Col>
        </Row>
    );
}

export default CardProject;
