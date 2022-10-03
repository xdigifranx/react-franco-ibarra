/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import  { db } from "../components/FirebaseCofig";

const ItemListConteiner = () => {

    const [listProductos , setListProductos]= useState([])
    const {categoria} = useParams()

    useEffect(()=>{
    async function fetchData(){
        if(categoria){
            const quer = query(collection(db,"products"),where('categoria', '==', categoria))
            const querySnapshot = await getDocs(quer);
            const products = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }));
            setListProductos(products)
        }else{
            const querySnapshot = await getDocs(collection(db, "products"));
            const products = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }));
            setListProductos(products);
        }
    }fetchData();
},[categoria]);
    
    return(
        <>
        <ItemList listProductos={listProductos}/>
        </>
    )
};

export default ItemListConteiner;