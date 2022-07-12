import './ItemCount.scss'

const ItemCount = ({max, contador, setContador, agregado}) => {

    const incrementar = () => {
        if (contador>=max){
            setContador(contador)
            alert("Máximo de stock alcanzado")
        } else {
            setContador( contador + 1 )
        }
    }
    const reducir = () => {
        contador>=1 && setContador( contador - 1 )
    }

    if (max === 0) {
        return (
            <div className="my-3">
                <p>Producto momentáneamente sin stock. Sepa disculpar</p>
            </div>
        )
    }
    
    return(
        <div className="mt-4">

            <div className="container_counter">
                <button className="btn btn-unline-primary" onClick={reducir} disabled={contador < 0}>-</button>
                <p>{contador}</p>
                <button className="btn btn-danger" onClick={incrementar} disabled={contador === max}>+</button>
            </div>

            <button className="btn btn-success" onClick={agregado} disabled={contador === 0}>Agregar al carrito</button>
            <br/>
        </div>
    )
}

export default ItemCount