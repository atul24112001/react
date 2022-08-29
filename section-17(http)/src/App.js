import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Form from './components/Form.js/Form';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const FormHandler = () => {
    setCartIsShown(false);
    setFormIsShown(prev => !prev);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} form={FormHandler} />}
      <Header onShowCart={showCartHandler} />
      {formIsShown && <Form form={FormHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
