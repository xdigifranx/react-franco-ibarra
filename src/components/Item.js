const Item = ({product})=> {
    return(
    <>
        <div className="card" >
            <img src={product.pictureUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{product.titulo}</h5>
                <p className="card-text">{product.precio}</p>
                <a href=" #" className="btn btn-primary">Comprar</a>
            </div>
        </div>
        
    </>
    );
};
export default Item;