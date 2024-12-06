import Card from "../components/Card";
import Navbar from "../components/Navbar";

const CONTINENTS = [
  { name: "Africa", className: "" },
  { name: "Europe", className: "" },
  { name: "America", className: "" },
  { name: "Oceania", className: "" },
  { name: "Asia", className: "" },
];

function Locations() {
  return (
    <>
      <div className="bg-white bg-cover min-w-screen min-h-screen text-black overflow-hidden">
        <Navbar />
        <div className="bg-[url('/images/1.jpg')] bg-center bg-cover bg-no-repeat w-full h-[38rem] flex flex-col text-center justify-center">
          <div className="uppercase flex flex-col gap-4">
            <h1 className="text-3xl">destinations</h1>
            <p className="text-xl">where i´ve been</p>
          </div>
        </div>
        <div className="mt-10">
          {CONTINENTS.map((continent) => (
            <div
              key={continent.name}
              className={`mb-10 ${continent.className}`}
            >
              <h1 className="flex justify-center text-3xl mb-4">
                {continent.name}
              </h1>
              <div className="bg-gradient-to-b from-transparent to-gray-300">
                <div className="flex hover:bg-areia hover:bg-opacity-15 duration-300">
                  <Card />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Locations;
