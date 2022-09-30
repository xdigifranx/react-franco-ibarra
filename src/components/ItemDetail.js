import ItemCount from '../components/ItemCount';
import { useState, useContext} from "react";
import { Link} from "react-router-dom";
import { CartContext } from "./CartContext";
const ItemDetail=({item})=>{
    const [itemCount, setItemCount]= useState(0)
    const ctx= useContext(CartContext); 
    
    const onAdd = (qty)=>{
        alert("se agrego "+qty+" productos al carrito")
        setItemCount(qty)
        ctx.addItem(item,qty);
    }
    return(
        <>
        <div className="tarjeta flex">
            <img src={item.pictureUrl} className="foto" alt="remera"></img>
            <div>
                <h5 className='bton'>{item.titulo}</h5>
                <p className='bton'>{item.precio}</p>
                <p className='bton'>Remera algodon estampada, talles XS/S/M/L/XL/XXL/XXXL</p>
                </div>
                {itemCount === 0 ?
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>:
        <Link to='/cart' style={{texDecoration:"none"}}>
            <button className="btn btn-primary">ir al carrito</button>
        </Link>
    }
            
        </div>
        
    </>
    );
};

export default ItemDetail;