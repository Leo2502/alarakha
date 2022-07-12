import { Link } from "react-router-dom"
import './HomeGrid.scss'

const HomeGrid = () => {
    return (

      <div className='productos_portada_container'>
          <Link to={'categoria/brocheros'} className="productos_portada_container_item mt-1 mb-1"><img src='../assets/multimedia/images/general/brocheros-p.jpg' alt="Brochero-Portada" className='w-100'></img></Link>
          <Link to={'categoria/carteras'} className="productos_portada_container_item mt-1 mb-1"><img src='../assets/multimedia/images/general/carteras-p.jpg' alt="Carteras-Portada" className='w-100'></img></Link>
          <Link to={'categoria/mochilas'} className="productos_portada_container_item mt-1 mb-1"><img src='../assets/multimedia/images/general/mochilas-p.jpg' alt="Mochilas-Portada" className='w-100'></img></Link>
          <Link to={'categoria/neceseres'} className="productos_portada_container_item mt-1 mb-1"><img src='../assets/multimedia/images/general/neceseres-p.jpg' alt="Neceseres-Portada" className='w-100'></img></Link>
      </div>
      );
}

export default HomeGrid