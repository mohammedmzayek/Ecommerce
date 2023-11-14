import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import PropTypes from "prop-types";
//new update
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
