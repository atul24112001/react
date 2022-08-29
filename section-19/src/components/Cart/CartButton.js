import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { CartAction } from '../../Store/cart-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  let totalQuontity = 0;
  for(let i = 0; i < cartItems.length; i++) {
    totalQuontity += cartItems[i].amount;
  }

  const toggleCartHandler = () => {
    dispatch(CartAction.toggleCart());
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuontity}</span>
    </button>
  );
};

export default CartButton;