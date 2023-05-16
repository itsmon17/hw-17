import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./pages/products/Products";
import MyCart from "./pages/my-cart/MyCart";
import MyOrder from "./pages/my-order/MyOrder";
import ProductsInfo from "./pages/products-info/ProductsInfo";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/:id/details" element={<ProductsInfo />} />
        <Route path="/mycard" element={<MyCart />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/" element={<Products />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
