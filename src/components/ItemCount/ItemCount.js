import './ItemCount.scss'
import { Link } from "react-router-dom"

const ItemCount = ({max, contador, setContador, agregado}) => {

    const incrementar = () => {
        if (contador>=max){
            setContador(contador)
        } else {
            setContador( contador + 1 )
        }
    }
    const reducir = () => {
        contador>1 && setContador( contador - 1 )
    }

    if (max === 0) {
        return (
            <div className="my-2">
                <p>Producto momentáneamente sin stock. Sepa disculpar</p>
            </div>
        )
    }
    
    return(
        <div className="mt-2">
            <p className='mb-3'>Stock Disponible: {max}</p>
            <div className="container_counter">
                <p>Cantidad:</p>
                <button className="btn btn-unline-primary" onClick={reducir} disabled={contador === 1}>-</button>
                <p>{contador}</p>
                <button className="btn btn-danger" onClick={incrementar} disabled={contador === max}>+</button>
            </div>

            <Link to={'/cart'}><button className="btn btn-success" onClick={agregado} disabled={contador === 0}>Agregar al carrito</button></Link>
            <br/>
        </div>
    )
}

export default ItemCount