import React from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from 'react-native';

function CardPortofolio2(props) {

    return (
        <Row style={{ paddingBottom: "30px" }}>
            <Col sm="6" lg="3">
                <img style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                }}
                    alt="logo perusahaan"
                    src={props.imageSource}></img>
            </Col>
            <Col sm="6" lg="9">
                <Row>
                    <h4>{props.companyName}</h4>
                </Row>
                <Row>
                    <Text>{props.desc}
                    </Text>
                </Row>
            </Col>
        </Row>
    );
}

export default CardPortofolio2;
