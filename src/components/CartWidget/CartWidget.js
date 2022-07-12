import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidadEnCarrito, carrito} = useCartContext()

    return(
        <Link to={'/cart'} className={`enlace ${carrito.length === 0 ? 'cartwidget-none' :'cartwidget'}`}><BsFillCartFill/>
        <span>{cantidadEnCarrito()}</span></Link>
    )
}

export default CartWidget