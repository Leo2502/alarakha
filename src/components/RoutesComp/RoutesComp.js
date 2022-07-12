import { ItemListContainer } from '../ItemListContainter/ItemListCointainer';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout';
import Contacto from '../Contacto/Contacto';
import Home from '../Home/Home';
import Footer from '../Footer/Footer'
import Medios from '../Medios/Medios'
import { Nosotros } from '../Nosotros/Nosotros'
import Tienda from '../Tienda/Tienda'
import NavbarComp from '../NavbarComp/navbarComp';

const RoutesComp = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <NavbarComp/>
            <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/categorias" element={ <ItemListContainer/>}/>
              <Route path="/categoria/:categoryId" element={ <ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path="/contacto" element={ <Contacto/> } />
              <Route path="/medios" element={ <Medios/> } />
              <Route path="/nosotros" element={ <Nosotros/> } />
              <Route path="/tienda" element={ <Tienda/> } />
              <Route path="/cart" element={ <Cart/> } />
              <Route path="*" element={ <Navigate to={"/"} /> } />
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default RoutesComp