

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    logout();

    navigate("/login");

  };

  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200 px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
        SwapNest
      </h1>

      <div className="flex gap-6 items-center text-gray-700 font-medium">

        {token ? (

          <>

            <Link
              to="/welcome"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Welcome
            </Link>

            <Link
              to="/productdashboard"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Create Product
            </Link>

            <Link
              to="/allproducts"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              All Products
            </Link>

            <Link
              to="/myproducts"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              My Products
            </Link>

            <Link
              to="/myrequests"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Requests
            </Link>

            <Link
              to="/profile"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-xl text-white hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link
              to="/login"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Signup
            </Link>

          </>

        )}

      </div>

    </nav>

  );

};

export default Navbar;