
const ItemDetail=({item})=>{
    return(
        <>
        <div className="card flex">
            <img src={item.pictureUrl} className="card-img-top foto" alt="..."></img>
            <div>
                <h5>{item.titulo}</h5>
                <p>{item.precio}</p>
                <p>Remera algodon estampada, talles XS/S/M/L/XL/XXL/XXXL</p>
                </div>
            
        </div>
        
    </>
    );
};

export default ItemDetail;