import './App.scss'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesComp from './components/RoutesComp/RoutesComp';

import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <RoutesComp/>
    </CartProvider>
  );
}

export default App;
