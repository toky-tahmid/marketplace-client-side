import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/994503c0b499b5ca969a0c410582af2c8ee67735-731x731-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logged out"))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li className="font-bold  text-green-500">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li className="font-bold  text-green-500">
        <NavLink
          to="/addjobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          {" "}
          Add job
        </NavLink>
      </li>
      <li className="font-bold  text-green-500">
        <NavLink
          to="/postedJobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          My posted jobs
        </NavLink>
      </li>
      <li className="font-bold  text-green-500">
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          My Bids
        </NavLink>
      </li>
      <li className="font-bold  text-green-500">
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Bid Requests
        </NavLink>
      </li>
      <li className="font-bold text-green-500">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar -mt-20 bg-base-100">
      <div className="navbar-start">
        <img className="w-52 h-64" src={logo} alt="" />
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img className="h-10 mr-8" src={user?.photoURL} />
            </div>
          </label>
        )}
        {user && user.displayName}
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className=" hover:bg-green-300 text-green-400 font-bold py-3 px-4 border border-white rounded-full transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
