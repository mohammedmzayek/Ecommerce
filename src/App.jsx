import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Order from "./pages/order/Order.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import NoPage from "./pages/nopage/nopage.jsx";
import MyState from "./context/data/myState.jsx";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup.jsx";
import ProductInfo from "./pages/prodcutInfo/ProductInfo.jsx";
import AddProduct from "./pages/admin/Pages/AddProduct.jsx";
import UpdateProduct from "./pages/admin/Pages/UpdateProduct.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import Allproducts from "./pages/allproducts/AllProducs.jsx";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<Allproducts />} />
          allproducts
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// user

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    console.log(localStorage.getItem("user"));
    return <Navigate to="/login" />;
  }
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
// Admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "admin123@outlook.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

ProtectedRoutesForAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};
