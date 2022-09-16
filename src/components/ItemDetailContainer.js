import { useState, useEffect } from "react";
import products from "./products";
import ItemDetail from "./ItemDetail";
import { Fetch } from "./Fetch";
import ItemCount from '../components/ItemCount';

const ItemDetailContainer = ()=>{
    const [data, setData]= useState({});

    useEffect(()=>{
    Fetch(products[1]) 
        .then(result=>setData(result))
        .catch(err=>console.log(err))
},[]);
    
    return(
        <>
        <ItemDetail producto={data} />
        <ItemCount initial={1} stock={10} />
        </>
);
};
export default ItemDetailContainer;