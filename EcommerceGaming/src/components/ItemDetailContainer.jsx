//detalle  de los productos.

import { useState, useEffect } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailContainer h-100 d-flex justify-content-center align-items-center' >
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;