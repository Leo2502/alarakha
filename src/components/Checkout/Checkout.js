import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { dataBase } from "../../firebase/config"
import { Formik } from "formik"
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import './Checkout.scss'
import SlickSlide from "../Cart/Slider"

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(2, 'El nombre es demasiado corto')
                .max(25, 'Máximo 30 caracteres'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    telefono: Yup.number()
                .required('Este campo es obligatorio, sin código ni guiones')
                .typeError('Debe ser un número')
                .min(10, 'Número inválido'),
    calle: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'El nombre de la calle es demasiado corto')
                .max(30, 'Máximo 30 caracteres'),
    altura: Yup.number()
                .required('Este campo es obligatorio')
                .typeError('Debe ser un número')
                .min(1, 'Altura inválida'),
    codigoPostal: Yup.number()
                .required('Este campo es obligatorio')
                .typeError('Debe ser un número')
                .min(1, 'Código postal inválido')
})

const Checkout = () => {

    window.scrollTo(0, 0)

    const { carrito, totalCarrito, vaciarCarrito, resumen, setResumen, setCart } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const generarOrden = async (values) => {

        const orden = {
            buyer: values,
            items: carrito.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalCarrito()
        }

        const batch = writeBatch(dataBase)
        const ordenesRef = collection(dataBase, "ordenes")
        const productosRef = collection(dataBase, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(item => item.id)))

        const sinStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = carrito.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                sinStock.push(itemToUpdate)
            }
        })


        if (sinStock.length === 0) {
            addDoc(ordenesRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrdenId(doc.id)
                    setResumen(carrito)
                    setCart([])
                })
        } else {
            swal("Oops!", "Hay productos sin stock! Vacíe el carrito y vuelva a intentar", "error");
        }
    }

    if (ordenId) {
        return (
            <div className="container my-5">
                <h2>Gracias por elegirnos!</h2>
                <hr/>
                <p>Nos pondremos en contacto para continuar con la gestión de pago</p>
                <p>Su número de guía de orden es: <strong>{ordenId}</strong></p>
                <div>
                    <p>Resumen de tu compra:</p>
                    {   
                        resumen.map(item => (
                            <div key={item.id} className="checkOut_producto_container my-2">
                                <div className="checkOut_producto_container_detail">
                                <h5 className="nombreProducto">{item.nombre}</h5>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio unitario: ${item.precio}</p>
                                <h6>Total: ${item.precio * item.cantidad}</h6>
                                </div>
                                <img src={item.img} alt={item.nombre}/>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
                <hr/>
                <div>
                    <h4 className="mb-2">También puede interesarte:</h4>
                    <hr/>
                    <div className="slick_container">
                        <SlickSlide/>
                    </div>
                </div>
                <Link to="/"><button className="my-3 button_finalizar">Finalizar</button></Link>
                <hr/>
            </div>
        )
    }

    if (carrito.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>
            
            <Formik
                initialValues={ {
                    nombre: '',
                    email: '',
                    telefono: '',
                    calle: '',
                    altura: '',
                    codigoPostal: '',
                } }
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Juan Díaz"
                            className="form-control my-2"
                        />
                        {formik.errors.nombre && <p className="alert-message">{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="juan.diaz@gmail.com"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert-message">{formik.errors.email}</p>}

                        <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="1132323232"
                            className="form-control my-2"
                        />
                        {formik.errors.telefono && <p className="alert-message">{formik.errors.telefono}</p>}

                        <input
                            value={formik.values.calle}
                            name="calle"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Av. de Mayo"
                            className="form-control my-2"
                        />
                        {formik.errors.calle && <p className="alert-message">{formik.errors.calle}</p>}

                        <input
                            value={formik.values.altura}
                            name="altura"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="1250"
                            className="form-control my-2"
                        />
                        {formik.errors.altura && <p className="alert-message">{formik.errors.altura}</p>}
                        
                        <input
                            value={formik.values.codigoPostal}
                            name="codigoPostal"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="1607"
                            className="form-control my-2"
                        />
                        {formik.errors.codigoPostal && <p className="alert-message">{formik.errors.codigoPostal}</p>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                )}
            </Formik>

            
            <button onClick={vaciarCarrito} className="btn btn-danger my-2">Cancelar compra</button>
        </div>
    )
}

export default Checkout