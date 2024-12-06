import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomeView() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default HomeView;
