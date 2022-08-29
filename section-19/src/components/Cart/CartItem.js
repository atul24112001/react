import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CartAction } from '../../Store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemAmountIncreseHandler = () => {
    dispatch(CartAction.addItem({id: props.id}))
  }

  const itemAmountdecreseHandler = () => {
    dispatch(CartAction.decreaseItemAmount(props.id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total}{' '}
          <span className={classes.itemprice}>(${props.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemAmountdecreseHandler}>-</button>
          <button onClick={itemAmountIncreseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;