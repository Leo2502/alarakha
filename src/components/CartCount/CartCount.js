import './CartCount.scss'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

const CartCount = ({max, cantidad, id}) => {

    const [ cantidadCarrito, setCantidadCarrito ] = useState (cantidad)

    const { carrito, setCart } = useCartContext()

    const incrementar = () => {
        if (cantidad>=max){
            setCantidadCarrito (cantidad)
        } else {
            setCantidadCarrito (cantidad+1)
        }
        actualizar()
    }
    const reducir = () => {
        cantidad>1 && setCantidadCarrito (cantidad- 1)
        actualizar()
    }

    const actualizar = () => {
        const buscarProducto = carrito.map(producto=>{
            if((producto.id===id)){
                producto.cantidad=cantidadCarrito;
                return producto;
            } else {
                return producto;
            }
        })   
        setCart([...buscarProducto])
    }
    
    return(
        <div className="mt-2">
            <div className="container_counter">
                <p>Cantidad:</p>
                <button className="btn btn-unline-primary container_counter_button" onClick={reducir} disabled={cantidad === 1}>-</button>
                <p>{cantidad}</p>
                <button className="btn btn-danger container_counter_button" onClick={incrementar} disabled={cantidad >= max}>+</button>
            </div>
            <br/>
        </div>
    )
}

export default CartCount