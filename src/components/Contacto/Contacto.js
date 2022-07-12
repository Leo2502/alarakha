import './Contacto.scss'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Contacto = () => {

    return (
        <div className='contactos__container'>
            <div className="contactos__container__item my-5">
            <h3 className='mb-5'>Contactanos!</h3>
                <ul>
                    <li className="mb-3"><a href="https://wa.me/+5491162488937?text=Hola,%20quería%20consultar%20por%20" className="whatsapp" target="blank"><AiOutlineWhatsApp/></a> +54-911-624-889-37</li>
                    <li><a href="mailto:alarakha.neceseres@hotmail.com"><AiOutlineMail/></a> alarakha.neceseres@hotmail.com</li>
                </ul>
            </div>
            <div className="contactos__container__item contactos__container__item--ubicacion my-5">    
                <h3>Visitanos!</h3>
                <iframe title="iframe" className="w-75 contactos__container__item__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52540.41689444957!2d-58.5987020377721!3d-34.60982394707292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8698cab7fa3%3A0xc4d83fe138c75b6f!2sCaseros%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1635739633790!5m2!1ses!2sar" width="400" height="300" allowfullscreen="" loading="lazy"/>
            </div>
            <div className="contactos__container__item my-5">
                <h3>Comentanos!</h3>
                Formulario de contacto
            </div>
        </div>    
    )
}

export default Contacto