import React from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products);
  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
    //console.log(response.data);
  }

  return <>home</>;
}

//To catch data first on the server, before the component renders, we can use Next to do that.

Home.getInitialProps = async () => {
  //fetch datat on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  //return response data as an object
  return { products: response.data };
  //note: this object will be merged with existing props
};

export default Home;
