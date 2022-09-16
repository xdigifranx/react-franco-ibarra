
const ItemDetail=({producto})=>{
    return(
        <>
        <figure>
            <img src={producto.pictureUrl} className="card-img-top foto" alt="..."></img>
            <div>
                <h5>{producto.titulo}</h5>
                <p>{producto.precio}</p>
                <p>Remera algodon estampada de naruto , talles XS/S/M/L/XL/XXL/XXXL</p>
                <a href=" #" className="btn btn-primary">Comprar</a>
            </div>
        </figure>
    </>
    );
};

export default ItemDetail;