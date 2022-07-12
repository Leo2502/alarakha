import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './HomeGrid.scss'

function CarouselMain() {
  return (
    <div className='container_carousel mt-2'>
    <h3 class="fs-1">Nuestra Selección</h3>
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../assets/multimedia/images/general/brochero-sel.png"
          alt="Seleccion-1"
        />
        <Carousel.Caption>
          <h3>Brocheros!</h3>
          <p><Link className='link-light p-1 bg-dark opacity-75' to={"/categoria/brocheros"}>No los quiero, los necesito!</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../assets/multimedia/images/general/neceser-sel.png"
          alt="Seleccion-2"
        />
        <Carousel.Caption>
          <h3>Neceseres!</h3>
          <p><Link className='link-light p-1 bg-dark opacity-75' to={"/categoria/neceseres"}>No los quiero, los necesito!</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../assets/multimedia/images/general/porta-sel.png"
          alt="Seleccion-3"
        />
        <Carousel.Caption>
          <h3>Portatodo!</h3>
          <p><Link className='link-light p-1 bg-dark opacity-75' to={"/categoria/portatodo"}>No los quiero, los necesito!</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselMain;