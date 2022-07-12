import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ( {items} ) => {

    return (
        <div>
            <h1>Catálogo</h1>
            <hr/>
            <div className="itemContainer">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
            </div>
        </div>
    )
}

export default ItemList