import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link} from "react-router-dom";

const Cart=()=>{
    const {cartList,removeItem,clear,totalprecio} = useContext(CartContext);
    if (cartList.length === 0) {
        return(
        <>
        <h1>No hay ningun producto en tu carrito</h1>
        <Link to='/'><button className="btn btn-primary">ir al catalogo</button>
        </Link></>)
    }


    return(
    <>
    <div >
    <Link to='/'><button className="btn btn-primary boton-derecho">ir al catalogo</button>
    </Link>
        {
        cartList.map(item =>
        <div key={item.key} className="card flex">
            <img src={item.pictureUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{item.titulo}</h4>
                <h5 className="card-text">${item.precio}</h5>
                <h5>Items:{item.qty}</h5>
                <h5>Subtotal:{item.precio* item.qty}</h5>
                <button className="btn btn-primary" onClick={()=>removeItem(item.key)}>borrar</button>
            </div>
        </div>)}
    <button className="btn btn-dark" onClick={clear}>borrar todos los productos</button>
    <table className=" table tabla btn-dark">
<thead>
    <tr>
    <th scope="col">productos</th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">total:{totalprecio()}</th>
    </tr>
    <tr>
    <th>
    <button className="btn bton">Comprar el producto</button>
    </th>
    </tr>
</tbody>
</table>
    </div>
    </>
    )
}
export default Cart;