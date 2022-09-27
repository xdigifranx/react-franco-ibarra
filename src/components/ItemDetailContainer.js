/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import products from "./products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=>{
    
    const [item, setItem]= useState({});
    
    const {key}= useParams()

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
    return(
        <>
        <ItemDetail item={item}/>
        </>
);
};
export default ItemDetailContainer;