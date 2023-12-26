import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

import { CartContext } from './Cart.Context';

const Item = ({id, name, price,img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    return(
        <div className="d-flex justify-content-around align-items-center flex-wrap m-2">
            <div className="items d-flex flex-column justify-content-center align-items-center rounded" >
                <div className="item">
                    <img src={img} alt={name} width="150px"  height="100px" />
                </div>

                <h2 className="text-center">{name}</h2>

                <p>Precio: <span>${price}</span></p>

                <p className="info">
                    Stock Disponible: {stock}
                </p>

                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>

                <ItemCount id={id} stock={stock} initial={0} onAdd={handleOnAdd} />
            </div>
        </div>
    )
}

export default Item;