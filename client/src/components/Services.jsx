import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import img3 from '../assets/6.jpg';

const Services = () => {
  return (
    <div className='Services'>
        <Carousel infiniteLoop autoPlay interval={1000}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>

            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Full Stack Java</p>
            </div>

            <div>
                <img src={img3} alt="Item3" />
                <p className='legend'>A.I. Development</p>
            </div>




        </Carousel>
    </div>
  )
}

export default Services