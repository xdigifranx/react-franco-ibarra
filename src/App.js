/* import logo from './logo.svg'; */
import ItemListConteiner from './components/itemListConteiner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext';
import './App.css';



function App() {
  return (
    <>
    <CartContextProvider>
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<ItemListConteiner/>}/>
    <Route path='/:categoria' element={<ItemListConteiner/>}/>
    <Route path='item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>
    </CartContextProvider>
    </>
    
  )
};

export default App;
