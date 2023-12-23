export const fetchLogin = async (email, password) => {

      try {

            const response = await fetch('https://pfalvarez-production.up.railway.app/api/users/login', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        email,
                        password
                  }),
                  credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {

                  return data;

            } else {

                  throw new Error(data.message);

            }

      } catch (error) {

            console.log(error);
            return error;

      }


};

export const fetchProducts = async () => {

      try {

            const response = await fetch('https://pfalvarez-production.up.railway.app/api/products', {
                  method: 'GET',
                  credentials: 'include'
            });

            const products = await response.json();

            if (response.ok) {

                  return products;

            } else {

                  throw new Error(products.message);

            }

      } catch (error) {

            return error;

      }

};

export const fetchProductById = async (p_id) => {

      try {

            const response = await fetch(`https://pfalvarez-production.up.railway.app/api/products/${p_id}`, {
                  method: 'GET',
                  credentials: 'include'
            });

            const product = await response.json();

            if (response.ok) {

                  return product;

            } else {

                  throw new Error(product.message);

            }


      } catch (error) {

            return error;

      }

}