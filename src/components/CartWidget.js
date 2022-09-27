import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "./CartContext";


const CartWidget = () =>{ 
    const { totalProducts } =useContext(CartContext);

    return (
        <>
            <BsFillCartFill  className="cart"></BsFillCartFill>
            <span> {totalProducts()}</span>
        </>
    )
};



export default CartWidget;