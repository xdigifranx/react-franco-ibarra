import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart=()=>{
    const ctx = useContext(CartContext);

    return(
    <>
    <div >
    <button className="btn btn-dark" onClick={ctx.clear}>borrar todos los productos</button>
        {
        ctx.cartList.map(item =>
        <div key={item.key} className="card flex">
            <img src={item.pictureUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{item.titulo}</h4>
                <h5 className="card-text">${item.precio}</h5>
                <h5>items:{item.qty}</h5>
                <button className="btn btn-primary" onClick={()=>ctx.removeItem(item.key)}>borrar</button>
            </div>
        </div>)}
    </div>
    </>
    )
}
export default Cart;