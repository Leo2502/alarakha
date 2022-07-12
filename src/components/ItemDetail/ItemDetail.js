import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { ContextoCarrito } from "../../context/CartContext"

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)

    const {carrito, enCarrito, setCart, guardarStorage} = useContext(ContextoCarrito)

    const handleAtras = () => {
        navigate(-1)
    }

    const agregado = () => {
        cantidad>0 && alert(`Agregaste ${cantidad} unidades del ${item.nombre} al carrito!`)
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
        guardarStorage("Carrito", carrito)
    }

    // const [ofertas, setOfertas] = useState([])

    // if (enCarrito(item.id)){
    //     const buscarProducto = carrito.map(producto=>{
    //         if(producto.id!==item.id){
    //             return producto;
    //         } else {
    //             return producto;
    //         }
    //     })
    //     setOfertas([...buscarProducto])
    // } else {
    //     const ofrecer = {
    //         ...item
    //     }
    //     setOfertas([...ofertas, ofrecer])
    // }
    // console.log(ofertas)


    return (
        <div>
        <div className="productos_detail_container my-2">
            <h3 className="nombreProducto">{item.nombre}</h3>
            <img className='my-3' src={item.img} alt={item.nombre}/>
            <p className='my-3'>{item.description}</p>
            <h4 className='my-3'>Precio: ${item.precio}</h4>

            <ItemCount 
                max={item.stock}
                contador={cantidad}
                setContador={setCantidad}
                nombre={item.nombre}
                agregado={agregado}
                id={item.id}/>
                
            <br/>
            </div>
            <div>
            {
                carrito.length >0 &&
                <Link to={'/cart'} className="btn btn-success">Terminar compra</Link>
            }
            </div>
            <button className='button_atras mt-4' onClick={handleAtras}>Atrás</button>
        </div>
    )
}

export default ItemDetail