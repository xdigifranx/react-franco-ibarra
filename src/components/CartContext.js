/* eslint-disable eqeqeq */
import { createContext, useState } from "react";

export const CartContext =createContext();

const CartContextProvider =({children})=>{
    
    const [cartList, setCartList]= useState([])

    const addItem =(product, qty)=>{
        if (isInCart(product.key)) {
            setCartList(cartList.map(produ => {
                return produ.key === product.key ?{...produ, qty: produ.qty + qty} : produ
            }));
        } else {
            setCartList([...cartList, {...product, qty}]);
        }
    }
    const totalprecio=()=>{
        return cartList.reduce((prev,act) =>prev+act.qty*act.precio,0)  
    }
const totalProducts=()=>{
    let prod= cartList.map(item=>item.qty);
    return prod.reduce((acumulador, qty)=>acumulador+=qty,0);
}

        const clear = ()=>{
            setCartList([]);
        }
    const removeItem = (key)=>{
        setCartList(cartList.filter(item => item.key !== key));
    }
    const isInCart = (id) => {
        return cartList.find(producto => id === producto.key)? true:false;
    }
    return(
        <>
        <CartContext.Provider value={{cartList, addItem, clear, removeItem,totalprecio,totalProducts}}>
        {children}
        </CartContext.Provider>
        </>
    )
}
export default CartContextProvider;