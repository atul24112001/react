import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { CartAction } from '../../Store/cart-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addItemToCartHandler = () => {
    dispatch(CartAction.addItem({id: props.id, title: title, price: price, amount: 1}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;