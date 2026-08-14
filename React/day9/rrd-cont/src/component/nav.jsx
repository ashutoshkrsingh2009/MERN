import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="h-16 w-full bg-amber-700 flex items-center justify-between px-8 shadow-lg">
      <h1 className="text-2xl font-bold text-white">
        Logo
      </h1>

      <div className="flex gap-8 text-white font-semibold">
      <NavLink
  to="/a"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  A
</NavLink>

        <NavLink
          to="/b"
          className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
        >
          B
        </NavLink>

        <NavLink
          to="/c"
          className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
        >
          C
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;