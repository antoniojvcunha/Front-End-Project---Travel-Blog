import { Link } from "wouter";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center mx-auto text-gray-600 uppercase text-xl font-bold">
          <img className="size-20" src="./public/images/logo.png" alt="Logo" />
          <div>
            <Link
              href="/"
              className=" border-b-2 border-transparent hover:text-gray-800 hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              home
            </Link>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              forecast
            </Link>
            <Link
              href="/locations"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              locations
            </Link>
            <Link
              href="/aboutme"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-gray-600 mx-1.5 sm:mx-6"
            >
              about me
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
