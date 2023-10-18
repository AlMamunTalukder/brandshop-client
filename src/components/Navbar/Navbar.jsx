const Navbar = () => {
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
                <a>Home</a>
              </li>
              <li>
                <a>Add Product</a>
              </li>

              <li>
                <a>My Cart</a>
              </li>
              <div className="">
                <a className="btn bg-yellow-300 rounded-full text-black hover:text-white ">
                  Sign In
                </a>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">AutoSleekX</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Add Product</a>
            </li>

            <li>
              <a>My Cart</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <a className="btn bg-yellow-300 rounded-full text-black hover:text-white">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;