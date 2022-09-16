/* import logo from './logo.svg'; */
import './App.css';
/* import ItemListConteiner from './components/itemListConteiner'; */
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <>
    <NavBar/>
    {/* <ItemListConteiner/> */}
    <ItemDetailContainer/>
    </>
    
  )
};

export default App;
