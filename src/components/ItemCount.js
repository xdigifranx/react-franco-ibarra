/* import './style/style.css'; */
import { useState } from "react";


const ItemCount = ( {initial, stock, onAdd}) =>{

    const [contador,setContador] = useState(initial);

    const sumar = ()=>{
        if (contador<stock) {
            setContador(contador + 1)
        }
        
}
    const restar = ()=>{
        if (contador > initial) {
    
        setContador(contador - 1)}}

    return(
        
<>
    <div className="contador" role="group" aria-label="Basic example">
        <button onClick={()=>restar()} type="button" className="btn btn-dark">-</button>
        <span>{contador}</span>
        <button onClick={()=>sumar()} type="button" className="btn btn-dark">+</button>
        <button onClick={()=>onAdd(contador)} type="button" className="btn btn-primary">comprar producto</button>
    </div>

</>
    )
}

export default ItemCount;