import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);
  const [isCartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return (
    <>
      <Divider>
        <Segment clearing size="large">
          <strong>Sub total:</strong>${cartAmount}
          <StripeCheckout
            name="Odos Contacts"
            amount={stripeAmount}
            image={products.length > 0 ? products[0].product.mediaUrl : ''}
            currency="USD"
            shippingAddress={true}
            billingAddress={true}
            zipCode={true}
            stripeKey='pk_test_51HpdA1LEcjZPNiarpZm1NE46kCrJmtOeieimPyZNIgdVOfrrvdZzqUaDQaafdQvlFnSsomRS3SWLbn4f3cjlcWS600qKrTvbhH'
            token={handleCheckout}
            triggerEvent="onClick"
          >
            <Button
              icon="cart"
              disabled={isCartEmpty || success}
              color="teal"
              floated="right"
              content="Checkout"
            ></Button>
          </StripeCheckout>
        </Segment>
      </Divider>
    </>
  );
}

export default CartSummary;
