import { FaCirclePlus } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className=" container rounded navbar navbar-expand-lg p-3 justify-content-between"
        style={{ backgroundColor: "#9d5ec0" }}
      >
        <a href="/" className="navbar-brand fs-1 text-light">
          <MdShoppingCart />

          <span className="mt-4">Product Store</span>
        </a>
        <button
          className="btn btn-outline-light"
          style={{ color: "#9d5ec0", backgroundColor: "#FFFF" }}
        >
          <Link
            to="/create"
            style={{ color: "#9d5ec0", backgroundColor: "#FFFF" }}
          >
            <FaCirclePlus />
          </Link>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
