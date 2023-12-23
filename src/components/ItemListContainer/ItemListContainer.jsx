import React, { useState, useEffect } from 'react';
import { fetchLogin, fetchProducts } from '../../hooks/useFetch/useFetch.js';
import ItemList from './ItemList/ItemList.jsx';

const ItemListContainer = () => {

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {

            const loadData = async () => {

                  setLoading(true);

                  try {

                        const email = 'test_react_valentin@gmail.com';
                        const password = '12345678';

                        const loginResponse = await fetchLogin(email, password);

                        if (loginResponse && loginResponse.status === "200: OK") {

                              const productsResponse = await fetchProducts();

                              const productsData = productsResponse.payload.products;

                              setProducts(productsData);

                        } else {

                              setError('Error en el login de la API');

                        }

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