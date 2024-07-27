import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full p-5 bg-gray-300 fixed top-0">
      <div className="w-full flex justify-center">
        <ul className="flex space-x-10">
          <li>
            <Link
              href={`/`}
              className="bg-blue-300 py-2 px-3 rounded-md hover:bg-blue-900 hover:text-white duration-300"
            >
              Add a human
            </Link>
          </li>
          <li>
            <Link
              href={`/`}
              className="bg-blue-300 py-2 px-3 rounded-md hover:bg-blue-900 hover:text-white duration-300"
            >
              Show all humans
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
