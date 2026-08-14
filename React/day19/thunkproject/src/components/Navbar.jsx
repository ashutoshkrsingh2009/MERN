import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const favourite = useSelector(
    (state) => state.products.favourites
  );

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-200 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-white hover:text-cyan-400 transition duration-300"
        >
          🛍️ AKS SHOPPING 
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300 font-medium"
          >
            Home
          </Link>

          <Link
            to="/favourite"
            className="relative flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition duration-300 shadow-md"
          >
            ❤️ Favourite

            <span className="bg-white text-red-600 text-sm font-bold px-2 py-0.5 rounded-full">
              {favourite.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;