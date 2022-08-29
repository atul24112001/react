import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect } from 'react';
import { sendCartData, fetchCartData } from './Store/cart-actions';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const dispatch = useDispatch();
  const cartShown = useSelector(state => state.cart.isCartShown)
  const cart = useSelector(state => state.cart.cartItems)
  const cartChanged = useSelector(state => state.cart.changed)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
   
    if(cartChanged)
     dispatch(sendCartData(cart))
  }, [cart, dispatch, cartChanged]);



  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartShown && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;