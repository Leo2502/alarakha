import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from '../../firebase/config'
import './ItemListContainer.scss'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        const productosR = collection(dataBase, "productos")
        const q = categoryId ? query(productosR, where("categoria", "==", categoryId)) : productosR

        getDocs(q)
            .then((res) => {
                const productos = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems( productos.sort((x,y)=>{
                    let a = x.categoria.toLowerCase()
                    let b = y.categoria.toLowerCase()
                    return a === b ? 0 : a > b ? 1 : -1
                }) )
                console.log(productos)
            })
            .finally(() => {
                setLoading(false)
            })
        
        }, [categoryId])

    return (
        <section>
            {
                loading
                ?   <div className="spinner"><Spinner animation="border" role="status"/></div>
                :  <ItemList items={items}/>
            }
        </section>
    )
}