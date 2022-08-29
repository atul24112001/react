import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome/*" element={<Welcome />} >
          <Route path="new-user" element={<p>New User</p>} />
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
