import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";

function App() {
  const [modal, setModal] = useState(false);

  const modalOpenHandler = () => {
    setModal(true);
  }
  
  const modalCloseHandler = () => {
    setModal(false);
  }

  return (
    <React.Fragment>
      {modal && <Cart onClick={modalCloseHandler}/>}
      <Header onClick={modalOpenHandler}/>
      <AvailableMeals/>
    </React.Fragment>
  );
}

export default App;
