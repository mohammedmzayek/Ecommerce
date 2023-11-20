import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
    </Layout>
  );
}

export default Home;
