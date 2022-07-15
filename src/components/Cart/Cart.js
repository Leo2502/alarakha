import { useCartContext } from "../../context/CartContext"
import { BsTrash } from "react-icons/bs"
import './Cart.scss'
import { Link } from 'react-router-dom'
import CartVacio from './CartVacio'
import { collection, getDocs } from "firebase/firestore"
import { dataBase } from "../../firebase/config"
import { useEffect } from "react"
import SlickSlide from './Slider'

const Cart = () => {

    window.scrollTo(0, 0)

    const {carrito, totalCarrito, vaciarCarrito, eliminarItem, setOfertas, enCarrito} = useCartContext()

    useEffect (()=>{
        const productosR = collection(dataBase, "productos")

        getDocs(productosR)
            .then((res) => {
                const productos = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                const interes = []
                productos.map(producto=>{
                    !enCarrito(producto.id) && interes.push(producto)
                    return setOfertas(interes)
                })
            })
    },[carrito])

    if (carrito.length === 0) return <CartVacio/>   

    return (
        <div className="container my-5">
            <h2>Resumen de su carrito:</h2>
            <hr/>

            {   
                carrito.map((item) => (
                <div>
                <div key={item.id} className="cart_producto_container my-2">
                    <div>
                    <h5 className="nombreProducto">{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    </div>
                    <img src={item.img} alt={item.nombre}/>
                    <button onClick={() => eliminarItem(item.id)} className="btn btn-danger"><BsTrash/></button>
                </div>
                <hr/>
                </div>
                ))
            }


            <h4 className="mt-5">Total a pagar: ${totalCarrito()}</h4>
            <div className="mt-5">
            <Link to="/categorias"><button className="btn btn-primary m-1">Continuar comprando</button></Link>
            <Link to="/checkout" className="btn btn-success m-1">Terminar compra</Link>
            <button onClick={vaciarCarrito} className="btn btn-danger m-1">Vaciar carrito</button>
            </div>

            <hr/>

            <div>
                <h4 className="mb-2">También puede interesarte:</h4>
                <hr/>
                <div className="slick_container">
                    <SlickSlide/>
                </div>
            </div>
        </div>
    )
}

export default Cart