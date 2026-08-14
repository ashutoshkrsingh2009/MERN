import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [displayName, setDisplayName] = useState("");
  const position = useSelector((store) => store.location);
  const nav = useNavigate();

  useEffect(() => {
    if (position.data) {
      const { latitude, longitude } = position.data;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      )
        .then((res) => res.json())
        .then((data) => setDisplayName(data.display_name));
    }
  }, [position]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            onClick={() => nav("/restaurants")}
            className="h-10 sm:h-12 w-auto cursor-pointer transition duration-300 hover:scale-105"
            src="/quickDeliver1.png"
            alt="QuickDeliver"
          />
        </Link>

        {/* Location (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-2 max-w-md flex-1 justify-center">
          <img src="/location.jpeg" className="w-5 h-5" alt="Location" />
          <p className="truncate text-sm font-medium text-gray-700">
            {displayName}
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm font-semibold">

          <Link className="flex items-center gap-2 hover:text-orange-500 transition">
            <img className="w-5 h-5" src="/sc.svg" alt="" />
            <span className="hidden sm:inline">Corporate</span>
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500 transition">
            <img className="w-5 h-5" src="/search.svg" alt="" />
            <span className="hidden sm:inline">Search</span>
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500 transition">
            <img className="w-5 h-5" src="/offers.svg" alt="" />
            <span className="hidden md:inline">Offers</span>
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500 transition">
            <img className="w-5 h-5" src="/help.svg" alt="" />
            <span className="hidden md:inline">Help</span>
          </Link>

          <Link className="flex items-center gap-2 hover:text-orange-500 transition">
            <img className="w-5 h-5" src="/signin.svg" alt="" />
            <span className="hidden sm:inline">Sign In</span>
          </Link>

          <Link className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow-md transition hover:bg-orange-600">
            <img className="w-5 h-5 invert" src="/cart.svg" alt="" />
            <span className="hidden sm:inline">Cart</span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;