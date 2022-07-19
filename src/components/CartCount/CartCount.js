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
        console.log(carrito)
    }
    const reducir = () => {
        actualizar()
        cantidad>1 && setCantidadCarrito (cantidad- 1)
        console.log(carrito)
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
                <button className="btn btn-unline-primary" onClick={reducir} disabled={cantidad === 1}>-</button>
                <p>{cantidad}</p>
                <button className="btn btn-danger" onClick={incrementar} disabled={cantidad >= max}>+</button>
            </div>
            <br/>
        </div>
    )
}

export default CartCount