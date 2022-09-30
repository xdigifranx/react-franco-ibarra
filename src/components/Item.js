import { Link } from "react-router-dom";

const Item = ({product})=> {
    return(
    <> 
        <div className="tarjeta flex" >
            <img src={product.pictureUrl} className="foto" alt="remera"></img>
            <div>
                <h5 className="bton">Titulo: {product.titulo}</h5>
                <p className="bton">${product.precio}</p>
                <Link to= { `/item/${product.id}`}><button className="btn btn-dark">Comprar</button></Link>
            </div>
        </div>
        
    </>
    );
};
export default Item;