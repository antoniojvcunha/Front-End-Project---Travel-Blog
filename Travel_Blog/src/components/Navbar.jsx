function Navbar() {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center p-2 mx-auto text-gray-600 capitalize text-xl font-bold">
          <img className="size-32" src="./public/images/logo.png" alt="Logo" />
          <div>
            <a
              href="#"
              className=" border-b-2 border-transparent hover:text-gray-800 hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              home
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              forecast
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              map
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              about me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
