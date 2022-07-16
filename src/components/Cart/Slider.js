import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

const SlickSlide = () => {

  const { ofertas } = useCartContext()

  SwiperCore.use([Navigation, Pagination, Scrollbar])

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {   
      ofertas.map((item) => (
        <SwiperSlide key={item.id} className="slide mb-3">
            <div className="slide_container">
              <p className='slide_container_nombre'>{item.nombre}</p>
              <img src={item.img} alt={item.nombre}/>
              <p className='slide_container_precio mt-2'>${item.precio}</p>
              <Link to={`/item/${item.id}`}><button className="mb-3 enlace">Lo quiero!</button></Link>
            </div>
        </SwiperSlide>
        ))
    }
    </Swiper>
  );
};

export default SlickSlide