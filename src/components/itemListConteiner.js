import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList'
import { Fetch } from "../components/Fetch";
import { useEffect ,useState } from 'react';
import products from "./products";

const ItemListConteiner = () => {

    const [listProductos , setListProductos]= useState([])
    useEffect(()=>{
        Fetch(products)
        .then(data => setListProductos(data))

    },[])
    console.log(listProductos);
    return(
        <>
        <div className=" flex"><ItemList listProductos={listProductos}/>
        </div>
        <ItemCount initial={1} stock={10} />
        </>
    )
};

export default ItemListConteiner;