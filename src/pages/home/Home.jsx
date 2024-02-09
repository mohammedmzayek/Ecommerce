import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/productCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/tetimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function Home() {
  // const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // };

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // };
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
