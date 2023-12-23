import React, { useState, useEffect } from 'react';
import { getProducts } from '../../utils/getProducts.js';
import ItemList from './ItemList/ItemList.jsx';

const ItemListContainer = () => {

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {

            const loadData = async () => {

                  setLoading(true);

                  try {

                        const products = await getProducts();

                        setProducts(products);

                  } catch (err) {

                        setError(err.message || 'Error desconocido');

                  }

                  setLoading(false);

            };

            loadData();

      }, []);

      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2>{error}</h2>;

      return (
            <>
                  <ItemList products={products} />
            </>
      );
};

export default ItemListContainer;