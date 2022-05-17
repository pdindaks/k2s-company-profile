import React from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from 'react-native';

function CardStrategy(props) {

    return (
        <Row style={{ paddingBottom: "30px",alignContent: "center"}}>
            <Col sm="12" lg="12">
                <img style={{
                    width: "340px",
                    height: "250px",
                    display: "block",
                    flex: 0.3,
                    borderRadius: 8,
                    }}
                    alt="ilutrasi strategi"
                    src={props.imageSource}>
                </img>
                <Row>
                    <Text style={{
                        marginLeft:"70px",
                        alignContent: "center",
                        fontWeight: "bold",
                        fontSize: 20}}>{props.desc}</Text>
                </Row>
            </Col>
        </Row>
    );
}

export default CardStrategy;
