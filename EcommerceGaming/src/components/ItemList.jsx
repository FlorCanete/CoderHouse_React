import Item from './Item';

const ItemList = ({products}) => {
    return(
        <div className="container d-flex flex-wrap justify-content-center">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList