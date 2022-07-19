import { createContext, useContext, useState } from "react";

export const ContextoCarrito = createContext()

export const useCartContext = () => {
    return useContext(ContextoCarrito)
}

export const CartProvider = ({children}) => {

    let carritoGuardado = localStorage.getItem("Carrito");

    const guardarStorage = (k, v) => { localStorage.setItem(k, v) };

    const [carrito, setCart] = useState(carritoGuardado?JSON.parse(carritoGuardado):[])
    guardarStorage("Carrito", JSON.stringify(carrito))
    console.log(carrito)

    const [resumen, setResumen] = useState([])
    const [ofertas, setOfertas] = useState([])
  
    const enCarrito = (id) => {
      return carrito.some((producto) => producto.id === id)
    }
  
    const totalCarrito = () => {
      return carrito.reduce( (total, producto) => total += (producto.precio * producto.cantidad), 0)
    }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce( (total, producto) => total += producto.cantidad, 0 )
    }
  
    const vaciarCarrito = () => {
      setCart( [] )
    }

    const eliminarItem = (id) => {
        setCart( carrito.filter((producto) => producto.id !== id) )
    }

    return (
        <ContextoCarrito.Provider value={ 
            {
                carrito,
                setCart, 
                enCarrito, 
                totalCarrito,
                cantidadEnCarrito, 
                vaciarCarrito,
                eliminarItem,
                resumen,
                setResumen,
                ofertas,
                setOfertas,
            } 
        }>
            {children}
        </ContextoCarrito.Provider>
    )
}