import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    console.log("ok");
    signOutUser()
      .then(console.log("logout"))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>

              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img
              className="w-[5rem] h-[5rem]"
              src="/easydeals.png"
              alt="logo"
            />
            <span className="text-2xl font-bold">Easy Deals</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>

            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-2">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer "
                  src={user.photoURL}
                  alt="image"
                />
              </div>

              <button onClick={handleSignOut} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <>
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnLy2TDFa9Gl29wA4q8nihtL1lDK9iuez6Hn885ePAskQ84QA7ZRsqzg56-cwjJS2VGk&usqp=CAU"
                alt="img"
              />
              <Link to={"/login"}>Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
