import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomeView() {
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./images/wallpaper.jpg')" }}
      >
        <Navbar />
        <div className="">
          <Hero />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomeView;
