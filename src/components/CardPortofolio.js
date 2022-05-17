import React from "react";
import { Col, Row } from "react-bootstrap";

function CardPortofolio(props) {
    return (
        <Col style={{ color: "#25344E" }}>
            <Row>
                <img style=
                    {{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "150px",
                        height: "100px",
                        objectFit: "scale-down",
                        display: "block"
                    }}
                    alt="logo DAG" src={props.imageSource} />
            </Row>
            <Row className="text-center" style={{ paddingTop: "5px" }}>
                <h5>
                    {props.portofolioName}
                </h5>
            </Row>
        </Col>
    );
}

export default CardPortofolio;
