/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import products from "./products";
import ItemDetail from "./ItemDetail";
import ItemCount from '../components/ItemCount';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    
    const [item, setItem]= useState({});
    
    const {key}= useParams()
    console.log(key);

    const Fetch = (producto)=>{
        
        return new Promise((resolve) => {
            setTimeout(()=>{
                if (key) {
                    
                    resolve(products.find((item)=>item.key == key))
                }else resolve(producto);
                
            },2000)
        })
        }
        useEffect(()=>{
            Fetch(products)
            .then(data => setItem(data))
    
        },[key])
        console.log(item);

    return(
        <>
        <ItemDetail item={item}/>
        <ItemCount initial={0} stock={10}/>
        </>
);
};
export default ItemDetailContainer;