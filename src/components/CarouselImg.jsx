import Carousel from 'react-bootstrap/Carousel';
import shop1 from '../assets/shop3.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop4.jpg'
import './CarouselImg.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='shop1' src={shop1} alt='shop1'/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='shop2' src={shop2} alt='shop2'/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='shop3' src={shop3} alt='shop3'/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;