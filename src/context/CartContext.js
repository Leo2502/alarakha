import { createContext, useContext, useState } from "react";

export const ContextoCarrito = createContext()

export const useCartContext = () => {
    return useContext(ContextoCarrito)
}

export const CartProvider = ({children}) => {

    let carritoGuardado = localStorage.getItem("Carrito");

    const [carrito, setCart] = useState(carritoGuardado? JSON.parse(localStorage.getItem("Carrito")) : [])
  
    const enCarrito = (id) => {
      return carrito.some((producto) => producto.id === id)
    }
  
    const totalCarrito = () => {
      return carrito.reduce( (total, producto) => total += (producto.precio * producto.cantidad), 0)
    }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce( (total, producto) => total += producto.cantidad, 0 )
    }

    const guardarStorage = (k, v) => { localStorage.setItem(k, v) };
  
    const vaciarCarrito = () => {
      setCart( [] )
      guardarStorage("Carrito", "")
    }

    const eliminarItem = (id) => {
        setCart( carrito.filter((producto) => producto.id !== id) )
        guardarStorage("Carrito", carrito)
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
                guardarStorage,
            } 
        }>
            {children}
        </ContextoCarrito.Provider>
    )
}