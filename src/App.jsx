import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Order from "./pages/order/Order.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import NoPage from "./pages/nopage/nopage.jsx";
import MyState from "./context/data/myState.jsx";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dahsboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
