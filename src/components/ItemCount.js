/* import './style/style.css'; */
import { useState } from "react";



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

    const agregarAlCarro=() =>{
        console.log('se agrego al carrito')
    }
    
    return(
<>
    <div className="btn-group contador" role="group" aria-label="Basic example">
        <button onClick={()=>sumar()} type="button" className="btn btn-primary">+</button>
        <span>{contador}</span>
        <button onClick={()=>restar()} type="button" className="btn btn-primary">-</button>
        <button onClick={()=>agregarAlCarro()} type="button" className="btn btn-primary">comprar producto</button>
    </div>

</>
    )
}

export default ItemCount;