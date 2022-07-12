import CarouselMain from "./HomeCarousel"
import HomeGrid from "./HomeGrid"

const Home = () => {
    return (
        <div>
        <div className="mb-1 w-100">
            <img className="img-fluid w-100 d-none d-md-block d-lg-block" src="../assets/multimedia/images/general/portada-d.jpg" alt="portada-Alarakha"/>
            <img className="img-fluid w-100 d-block d-md-none mb-4" src="../assets/multimedia/images/general/portada-m.jpg" alt="portada-Alarakha"/>
        </div>
        <h1>Hecho • con • amor</h1>
        <HomeGrid/>
        <CarouselMain/>
        </div>
    )
}

export default Home