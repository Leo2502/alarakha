import './Footer.scss'
import { BsInstagram, BsFacebook, BsFillArrowUpCircleFill, BsWhatsapp } from 'react-icons/bs'
import { BiMailSend, BiMap } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
        <div className="menu__footer">
        {/* Sección sobre la tienda */}
        <div className="menu__footer__item">
        <h4 className="menu__footer__item__title fs-5">Tienda</h4>
        <ul className="m-0 mb-4 p-0">
            <li><Link className='enlace' to={"/contacto"}>Contacto</Link></li>
            <li><Link className='enlace' to={"/medios"}>Medios de Pago</Link></li>
            <li><Link className='enlace' to={"/tienda"}>Tienda</Link></li>
        </ul>
        </div>


        {/* Sección Sobre Nosotros */}
        <div className="menu__footer__item">
        <h4 className="menu__footer__item__title fs-5"><Link className='enlace' to={"/nosotros"}>Sobre Nosotros</Link></h4>
        </div>

        
        {/* Sección Redes Sociales y contacto */}
        <div className="menu__footer__item">
        <div className="menu__footer__item--redes">
        <a className="enlace display-5 mb-0" href="https://www.instagram.com/alarakha.neceseres/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a className="enlace display-5 mb-0" href="https://www.facebook.com/alarakhaneceseres" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        </div>
        <div className="menu__footer__item--contacto">
          <a href="mailto:alarakha.neceseres@hotmail.com" className="enlace"><BiMailSend/></a>
          <a href="https://www.google.com/maps/place/Caseros,+Provincia+de+Buenos+Aires/@-34.6097924,-58.5811922,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb8698cab7fa3:0xc4d83fe138c75b6f!8m2!3d-34.6094827!4d-58.5634631" className="enlace" target="_blank" rel="noopener noreferrer"><BiMap/></a>
          <a href="https://wa.me/+5491162488937?text=Hola,%20quería%20consultar%20por%20" className="enlace whatsapp" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
        </div>
        </div>


        {/* Botón subir a inicio */}
        <a className="menu__footer__item--flecha-header" data-aos="fade-up" href="#"><BsFillArrowUpCircleFill/></a>
    </div>
    <div>
        <img className="footer__logo" src="../assets/multimedia/images/general/logo.png" alt="logo-Alarakha"/>
        <p className="footer__copyrigth mb-0">© Alarakha - 2021 </p>
        <p className="footer__copyrigth mb-0">Diseñado por Leonel Sollazzo </p>
    </div>
  </footer>
    )
}

export default Footer