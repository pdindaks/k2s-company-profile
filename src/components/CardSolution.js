import React from "react";
import { Col } from "react-bootstrap";

function CardSolution(props) {

    return (
        <Col md="12" lg="6" style={{ color: "#25344E", paddingBottom: "20px" }}>
            <img alt="History DAG"
                src={props.imageSource}
                style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: "0",
                    paddingRight: "0",
                    objectFit: "scale-down",
                    border: "1px solid #808080"
                }} />
            <br />
            {/* <h5 style={{ paddingTop: "5px" }}>
                {props.title}
            </h5>
            <text>
                {props.desc}
            </text> */}
        </Col>
    );
}

export default CardSolution;
