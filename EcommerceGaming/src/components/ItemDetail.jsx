import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from './Cart.Context';
import Item from './Item';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem d-flex'>
            <picture className='d-flex justify-content-end align-items-center'>
                <img className='ItemImg' src={img} alt={name} height="200" />
            </picture>

            <section className='d-flex flex-column CardInfo'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
                <p className='Info-Category'>
                    {category}
                </p>

                <p className='Info-Description'>
                    {description}
                </p>

                <p className='Info'>
                    ${price}
                </p>

                <div className='d-flex flex-column align-items-center'>
                    { quantityAdded >= 1 ? (
                        <Link to='/cart' className='Option'>
                            Terminar Compra
                        </Link>
                    ) : (
                        <ItemCount initial ={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </div>
            </section>


        </article>
    );
}

export default ItemDetail;
