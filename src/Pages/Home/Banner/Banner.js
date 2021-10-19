import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We are Here to Help You!</h3>
      <p>You guys are very welcome in our gym and we will get you the best fitness</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Perfect Body Means Perfect Minds</h3>
      <p>If you are wiling to fit yourself then you are in the riht place</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>No Pain No Gain</h3>
      <p>Gym is the only place where you can express all of your frustrution</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;