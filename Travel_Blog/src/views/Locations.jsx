import Card from "../components/Card";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function Locations() {
  return (
    <>
      <div className="bg-ceu bg-cover min-w-screen min-h-screen text-black overflow-hidden">
        <Navbar />
        <div className="bg-[url('/images/1.jpg')] bg-center bg-cover bg-no-repeat w-full h-[38rem] flex flex-col text-center justify-center">
          <div className="uppercase flex flex-col gap-4">
            <h1 className="text-3xl">destinations</h1>
            <p className="text-xl">where i´ve been</p>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center mt-10 text-3xl mb-10">Africa</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">Europe</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">America</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Card />
            </div>
          </div>

          <h1 className="flex justify-center mt-10 text-3xl mb-10">Oceania</h1>
          <div className=" bg-gradient-to-b from-transparent to-areia">
            <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
              <Card />
            </div>

            <h1 className="flex justify-center mt-10 text-3xl mb-10">Asia</h1>
            <div className=" bg-gradient-to-b from-transparent to-areia">
              <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
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
