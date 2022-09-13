import Item from "../components/Item";


const ItemList = ({listProductos}) => {
    return(
        <>
        {listProductos.map ((product) => (
            <Item product={product} key ={product.key}/>
        ))}
        </>
    );
};
export default ItemList;