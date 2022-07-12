import './Item.scss'
import { Link } from "react-router-dom"

const Item = ({item}) => {

    return (
        <div className='item_list_producto_container'>
            <h4 className="mb-3 nombreProducto">{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} height="300vh"/>
            <h5 className="mt-3">Precio: ${item.precio}</h5>
            <Link to={`/item/${item.id}`}>
                <button className="my-2">Ver más</button>
            </Link>
            <hr/>
        </div>
    )
}

export default Item