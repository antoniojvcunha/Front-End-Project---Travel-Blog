import Navbar from "../components/Navbar";

function Locations() {
  return (
    <>
      <div className="bg-ceu bg-cover min-h-screen text-black absolute left-0 right-0">
        <Navbar />
        <img
          src="/images/1.jpg"
          alt=""
          className="absolute left-0 right-0 w-full h-96 object-cover "
        />
      </div>
    </>
  );
}

export default Locations;
