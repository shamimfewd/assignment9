import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { CiLogin, CiLogout } from "react-icons/ci";

const Nav = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  // logout user
  const handleSignOut = () => {
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
                <NavLink to={"/updateprofile"}>Update Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
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
            {user ? (
              <li>
                <NavLink to={"/updateprofile"}>Update Profile</NavLink>
              </li>
            ) : null}

            {/* {user ? (
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
            ) : null} */}

            <li>
              <NavLink to={"/register"}>Register</NavLink>
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
                <CiLogout className="text-xl" /> Log Out
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn">
                <CiLogin className="text-xl" /> <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
