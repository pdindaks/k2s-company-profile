import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

function CarouselSolution() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel nextIcon={<FaChevronCircleRight color="black" size="40px" />} prevIcon={<FaChevronCircleLeft color="black" size="40px" />} variant="dark" activeIndex={index} onSelect={handleSelect} style={{ marginBottom: "30px" }}>
            <Carousel.Item>
                <img
                    style={{ objectFit: "cover", height:"600px", margin: "auto" }}
                    className="d-block"
                    src="/Kominfo.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{color: "#FFFFFF", backgroundColor: "#008181EE"}}>
                    <h3>PROYEK TOWER POWER BAKTI-KOMINFO (450 Watt)</h3>
                    <p><b>Otonomi 72 Jam</b></p>
                    <p>PV Panel 440 Wp sebanyak 14 Modul dan Baterai Lithium Li-Ion 48V 52AH sebanyak 16 unit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: "cover", height:"600px", margin: "auto" }}
                    className="d-block"
                    src="/N3T.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption style={{color: "#FFFFFF", backgroundColor: "#008181EE"}}>
                    <h3>PROYEK XL NON 3T - KALIMANTAN (450Watt)</h3>
                    <p><b>Otonomi 48 Jam</b></p>
                    <p>PV Panel 440 Wp sebanyak 10 Modul dan Baterai Lithium Li-Ion 48V 52 AH sebanyak 8 Unit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: "cover", height:"600px", margin: "auto" }}
                    className="d-block"
                    src="/Balaraja.jpeg"
                    alt="Third slide"
                />
                <Carousel.Caption style={{color: "#FFFFFF", backgroundColor :"#008181EE"}}>
                    <h3>PROYEK MOCK UP XL-BALARAJA (1000 Watt)</h3>
                    <p><b>Otonomi 48 Jam</b></p>
                    <p>PV Panel 330 Wp sebanyak 24 Modul dan Baterai Lithium LiFePO4 sebanyak 12 Unit</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselSolution;
