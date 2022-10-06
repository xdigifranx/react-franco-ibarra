import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link} from "react-router-dom";
import { serverTimestamp ,doc, setDoc, collection,updateDoc, increment } from "firebase/firestore";
import {db} from "./FirebaseCofig";
import Swal from 'sweetalert2';

const Cart=()=>{
    const {cartList,removeItem,clear,totalprecio} = useContext(CartContext);
    if (cartList.length === 0) {
        return(
        <>
        <h1>No hay ningun producto en tu carrito</h1>
        <Link to='/'><button className="btn btn-primary">ir al catalogo</button>
        </Link></>)
    }
    const createOrder=async()=>{
        const itemsForDB=cartList.map(item=>({
            id:item.id,
            titulo:item.titulo,
            precio:item.precio,
            qty:item.qty
        }))
        let order={
            buyer:{
                name:"Franco",
                email:"emailfalso@yaoo.com",
                phone:"1122334455"
            },
            items:itemsForDB,
            date:serverTimestamp(),
            total:totalprecio()
        }
        const newOrderRef = doc(collection(db, "order"))
        await setDoc(newOrderRef,order)
        cartList.forEach(async(item) => {
        const washingtonRef = doc(db, "products", item.id);
        await updateDoc(washingtonRef, {
        stock: increment(-item.qty)
        });
        });
        clear()
        Swal.fire(
            "se a comprado el producto y se guardo con el id: "+newOrderRef.id
        )
        
    }

    return(
    <>
    <div >
    <Link to='/'><button className="btn btn-primary boton-derecho">ir al catalogo</button>
    </Link>
        {
        cartList.map(item =>
        <div key={item.id} className="tarjeta flex">
            <img src={item.pictureUrl} className="foto" alt="remera"></img>
            <div>
                <h4 className="bton">{item.titulo}</h4>
                <h5 className="bton">${item.precio}</h5>
                <h5 className="bton">Items: {item.qty}</h5>
                <h5 className="bton">Subtotal: ${item.precio* item.qty}</h5>
                <button className="btn btn-primary" onClick={()=>removeItem(item.id)}>borrar</button>
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
    <button onClick={createOrder} className="btn bton">Comprar el producto</button>
    </th>
    </tr>
</tbody>
</table>
    </div>
    </>
    )
}
export default Cart;