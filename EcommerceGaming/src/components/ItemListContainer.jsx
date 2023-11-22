// ItemListContainer.js

import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
