import Card from "../components/Card";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function Locations() {
  return (
    <>
      <div className="bg-ceu bg-cover min-w-screen min-h-screen text-black overflow-hidden">
        <Navbar />
        <img src="/images/1.jpg" alt="" className="w-full h-96 object-cover " />
        <div>
          <h1 className="flex justify-center mt-10 text-3xl mb-10">Africa</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Maps />
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">Europe</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Maps />
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">America</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Maps />
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">Oceania</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Maps />
              <Card />
            </div>

            <h1 className="flex justify-center mt-10 text-3xl mb-10">Asia</h1>
            <div className=" bg-gradient-to-b from-transparent to-areia">
              <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
                <Maps />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locations;
