import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

function Home() {
  const context = useContext(myContext);
  console.log(context);
  return <Layout>Home</Layout>;
}

export default Home;
