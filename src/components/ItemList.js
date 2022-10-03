import Item from "../components/Item";


const ItemList = ({listProductos}) => {
    return(
        <>
        <div className="container text-center ">
        <div className="row">
        {listProductos.map ((product) => (
            <Item product={product} key ={product.id}/>
        ))}
        </div>
        </div>
        </>
    );
};
export default ItemList;