import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api';

const ProductDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(itemId)
      .then((productData) => {
        setProduct(productData);
      })
      .catch((error) => {
      });
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetail;
