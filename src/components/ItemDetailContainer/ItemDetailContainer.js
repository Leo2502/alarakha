import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { dataBase } from "../../firebase/config"
import ItemDetail from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {

        const docR = doc(dataBase, "productos", itemId)

        getDoc(docR)
            .then((doc) => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <section className="container my-5">
            {
                loading
                ?   <Spinner animation="border" role="status"/>
                :  <ItemDetail item={item}/>
            }
        </section>
    )
}