import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { ContextoCarrito } from "../../context/CartContext"
import swal from 'sweetalert'
import Preguntas from './Preguntas'

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)

    const {carrito, enCarrito, setCart} = useContext(ContextoCarrito)

    const handleAtras = () => {
        navigate(-1)
    }

    const agregado = () => {
        cantidad>0 && swal("Agregado!", `Agregaste ${cantidad} unidades de ${item.nombre} al carrito!`, "success");
        if (enCarrito(item.id)){
            const buscarProducto = carrito.map(producto=>{
                if(producto.id===item.id){
                    producto.cantidad=producto.cantidad+cantidad;
                    item.stock=item.stock-producto.cantidad
                    return producto;
                } else {
                    return producto;
                }
            })
            setCart([...buscarProducto])
        } else {
            const alCarrito = {
                ...item,
                cantidad
            }
            item.stock=item.stock-cantidad
            setCart([...carrito, alCarrito])
        }
        setCantidad(0)
    }

    return (
        <div>
        <button className='button_atras mt-1' onClick={handleAtras}>Atrás</button>
        <div className="productos_detail_container mt-1">
            <div className='d-flex justify-content-center'>
                <img className='my-3' src={item.img} alt={item.nombre}/>
            </div>
            <div className='productos_detail_container_nav'>
                <h3 className="nombreProducto">{item.nombre}</h3>
                <p className='my-1'>{item.description}</p>
                <h4 className='mt-3'>${item.precio}</h4>
                <div>
                    <ItemCount 
                            max={item.stock}
                            contador={cantidad}
                            setContador={setCantidad}
                            nombre={item.nombre}
                            agregado={agregado}
                            id={item.id}/>
                    <div>
                        {
                            carrito.length >0 &&
                            <Link to={'/cart'} className="btn btn-success mt-2 mb-2">Terminar compra</Link>
                        }
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
            <h3>Preguntas:</h3>
            <hr/>
            <Preguntas item={item}/>
        </div>
    )
}

export default ItemDetail