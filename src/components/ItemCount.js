/* import './style/style.css'; */
import { useState } from "react";
import { Link} from "react-router-dom";


const ItemCount = ( {initial, stock}) =>{

    const [contador,setContador] = useState(initial);

    const sumar = ()=>{
        if (contador<stock) {
            setContador(contador + 1)
        }
        
}
    const restar = ()=>{
        if (contador > initial) {
    
        setContador(contador - 1)}}

        const [itemCount, setItemCount]= useState(0)
        const onAdd = ()=>{
            if (contador===0) {
                alert("agregue productos al carrito")
            } else {
                alert("se a agregado "+contador+" productos al carrito")
            }
            setItemCount(contador)
        }
    
    return(
<>
    <div className="contador" role="group" aria-label="Basic example">
        <button onClick={()=>sumar()} type="button" className="btn btn-primary">+</button>
        <span>{contador}</span>
        <button onClick={()=>restar()} type="button" className="btn btn-primary">-</button>
        <div>
        {itemCount === 0 ?
        <button onClick={()=>onAdd()} type="button" className="btn btn-primary">comprar producto</button>
        :<Link to='/cart' style={{texDecoration:"none"}}><button className="btn btn-primary">ir al carrito</button></Link>
        }
        </div>
    </div>

</>
    )
}

export default ItemCount;