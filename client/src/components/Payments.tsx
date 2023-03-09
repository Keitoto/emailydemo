import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../store/authSlice';
import { useAppDispatch } from '../store';

const Payments = () => {
  const dispatch = useAppDispatch();
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500} // US cents
      token={(token) => dispatch(handleToken(token))}
      stripeKey={import.meta.env.VITE_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
