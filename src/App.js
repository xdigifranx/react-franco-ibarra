/* import logo from './logo.svg'; */
import './App.css';
import ItemListConteiner from './components/itemListConteiner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Cart from './components/Cart'



function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<ItemListConteiner/>}/>
    <Route path='/:categoria' element={<ItemListConteiner/>}/>
    <Route path='item/:key' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>
    </>
    
  )
};

export default App;
