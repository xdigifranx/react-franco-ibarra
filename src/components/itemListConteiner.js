import ItemCount from '../components/ItemCount';

const ItemListConteiner = () => { 
    return(
        <>
        <p>lista de productos</p>
        <ItemCount initial={1} stock={10} />
        </>
    )
};

export default ItemListConteiner;