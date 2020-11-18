import { Segment } from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import axios from 'axios';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';

function Cart({ products }) {
  return (
    <Segment>
      <CartItemList products={products} />
      <CartSummary products={products} />
    </Segment>
  );
}

Cart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { products: [] };
  }
  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  return { products: response.data };
};

export default Cart;
