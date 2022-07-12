import { Link } from "react-router-dom"

const CartVacio = () => {

    return (
        <div className="container mt-4">
            <h2>Tu carrito está vacío</h2>
            <hr/>
            <p>Por favor, agrega productos para continuar.</p>

            <Link to="/categorias" className="btn btn-success my-2 mx-2">Ver productos disponibles</Link>
            <Link to="/" className="btn btn-primary my-2">Volver al Home</Link>
        </div>
    )
}

export default CartVacio