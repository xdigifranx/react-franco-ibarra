import { Link } from "react-router-dom";

const Item = ({product})=> {
    return(
    <>
        <div className="card" >
            <img src={product.pictureUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{product.titulo}</h5>
                <p className="card-text">{product.precio}</p>
                <Link to= { `/item/${product.key}`}><button className="btn btn-primary">Comprar</button></Link>
            </div>
        </div>
        
    </>
    );
};
export default Item;