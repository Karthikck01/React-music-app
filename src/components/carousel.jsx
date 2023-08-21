import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { coro,corf,cort } from "../assets/image";
const CarouselComponent = () => {
  return (
    <Carousel className="p-5">
      <Carousel.Item interval={1000}>
        <Image src={coro}  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={cort} />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={corf}  />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
