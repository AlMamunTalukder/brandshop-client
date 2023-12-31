import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addProducts"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myCarts"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <div className="">
                {user ? (
                  <div className="flex items-center">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={`${user.displayName}'s profile`}
                        className="w-10 h-10 rounded-full mr-2"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-500 mr-2"></div>
                    )}
                    <p className="mr-2">{user.displayName}</p>
                    {/* <p>{user.email}</p> */}
                    <button
                      onClick={handleLogOut}
                      className="btn btn-primary ml-2"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <NavLink to="/signIn">
                    <a className="btn bg-yellow-300 rounded-full text-black hover:text-white">
                      Sign In
                    </a>
                  </NavLink>
                )}
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">AutoSleekX</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addproducts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myCarts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <div className="flex items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={`${user.displayName}'s profile`}
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-500 mr-2"></div>
              )}
              <p className="mr-2">{user.displayName}</p>
              {/* <p>{user.email}</p> */}
              <button onClick={handleLogOut} className="btn btn-primary ml-2">
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to="/signIn">
              <a className="btn bg-yellow-300 rounded-full text-black hover:text-white">
                Sign In
              </a>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
