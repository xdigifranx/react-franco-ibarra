import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "./CartContext";


const CartWidget = () =>{ 
    const { totalProducts } =useContext(CartContext);

    return (
        <>
        <button type="button" className="btn btn-dark position-relative"><BsFillCartFill  className="cart"></BsFillCartFill>
        <span className="badge text-bg-secondary ">{totalProducts()}<span className="visually-hidden"></span>
        </span>
        </button>
        </>
    )
};



export default CartWidget;