import { Link } from "react-router-dom";

const Item = ({product})=> {
    return(
    <> 
        <div className="tarjeta col galeria" >
            <img src={product.pictureUrl} className="foto" alt="remera"></img>
            <div>
                <h5 className="bton">Titulo: {product.titulo}</h5>
                <h5 className="bton">${product.precio}</h5>
                <h5 className="bton">stock: {product.stock}</h5>
                <Link to= { `/item/${product.id}`}><button className="btn btn-dark">Comprar</button></Link>
            </div>
        </div>
        
    </>
    );
};
export default Item;