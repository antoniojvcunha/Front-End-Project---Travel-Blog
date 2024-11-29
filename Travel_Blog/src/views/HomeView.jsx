import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomeView() {
  return (
    <>
      <Navbar />
      <div className="my-24 ml-24">
        <Hero />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default HomeView;
