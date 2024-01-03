import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Order from "./pages/order/Order.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import NoPage from "./pages/nopage/nopage.jsx";
import MyState from "./context/data/myState.jsx";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup.jsx";
import ProductInfo from "./pages/prodcutInfo/ProductInfo.jsx";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
