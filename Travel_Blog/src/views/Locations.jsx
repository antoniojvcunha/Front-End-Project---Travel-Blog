import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function Locations() {
  return (
    <>
      <div className="bg-ceu bg-cover min-w-screen  min-h-screen text-black overflow-hidden">
        <Navbar />
        <img src="/images/1.jpg" alt="" className="w-full h-96 object-cover " />
        <div>
          <h1 className="flex justify-center mt-10 text-3xl mb-10">Africa</h1>
          <Maps />
        </div>
      </div>
    </>
  );
}

export default Locations;
