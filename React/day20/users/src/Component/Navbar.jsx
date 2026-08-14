import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg p-5">

      <h1 className="text-center text-4xl font-bold">
        User Management System
      </h1>

      <div className="flex justify-center gap-10 mt-5 text-lg">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/friends">
          Friends
        </NavLink>

        <NavLink to="/blocklist">
          Block List
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;