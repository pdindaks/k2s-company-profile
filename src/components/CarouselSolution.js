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
                    src="/Carousel-PLTS.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{color: "#FFFFFF", backgroundColor: "#008181EE"}}>
                    <h3>Solar Panel</h3>
                    <p>Energi Berkelanjutan dengan pasokan tak terbatas</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    style={{ objectFit: "cover", height: "550px", margin: "auto" }}
                    className="d-block w-100"
                    src="/Carousel2.jpeg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Smart City</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    style={{ objectFit: "cover", height:"600px", margin: "auto" }}
                    className="d-block"
                    src="/Carousel-Fiber-Optic.png"
                    alt="Second slide"
                />
                <Carousel.Caption style={{color: "#FFFFFF", backgroundColor :"#008181EE"}}>
                    <h3>Fiber Optic</h3>
                    <p>
                        Teknologi transmisi sinyal cahaya yang stabil dan sangat cepat.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSolution;
