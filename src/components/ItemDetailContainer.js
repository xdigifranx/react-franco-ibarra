/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc , getDoc } from "firebase/firestore";
import { db } from './FirebaseCofig'


const ItemDetailContainer = ()=>{
    
    const [item, setItem]= useState({});
    
    const {id}= useParams()

    useEffect(()=>{
    async function promesa() {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        let product={ id: id, ...docSnap.data() }
            if (product!== undefined) {
            setItem(product)
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    } 
    }promesa()
},[id])
    return(
        <>
        <ItemDetail item={item}/>
        </>
);
};
export default ItemDetailContainer;