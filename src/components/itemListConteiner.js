/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../components/ItemList';
import { useEffect ,useState } from 'react';
import products from "./products";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {

    const [listProductos , setListProductos]= useState([])
    const {categoria} = useParams()

    const Fetch = (productos)=>{
        
        return new Promise((resolve) => {
            setTimeout(()=>{
                if (categoria) {
                    resolve(products.filter((item)=>item.categoria === categoria))
                }else{
                    resolve(productos)
                }
            },2000)
        })
        }


    useEffect(()=>{
        Fetch(products)
        .then(data => setListProductos(data))

    },[categoria])
    
    return(
        <>
        <div className="flex">
        <ItemList listProductos={listProductos}/>
        </div>
        </>
    )
};

export default ItemListConteiner;