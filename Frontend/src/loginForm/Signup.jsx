

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Signup = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [agree, setAgree] = useState(false);

  const submitHandler = async (e) => {

    e.preventDefault();

    if (!agree) {

      alert("Please agree to Terms & Conditions");

      return;

    }

    try {

      const res = await api.post(

        "/signup",

        {
          userName,
          email,
          password,
        }
      );

      console.log(res.data);

      alert(res.data.message || "Signup Successful");

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user || res.data)
      );

      navigate("/productdashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Signup Failed"
      );

    } finally {

      setUserName("");
      setEmail("");
      setPassword("");
      setAgree(false);

    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-4">
            SwapNest
          </h1>

          <p className="text-lg mb-6">
            Buy, Sell & Exchange Products Easily 🚀
          </p>

          {/* ALLOWED */}

          <div className="mb-8">

            <h2 className="text-2xl font-semibold mb-4">
              ✅ You Can Sell & Exchange
            </h2>

            <div className="space-y-2 text-sm">

              <p>✔ Mobiles</p>

              <p>✔ Laptops</p>

              <p>✔ Headphones</p>

              <p>✔ Smart Watches</p>

              <p>✔ Furniture</p>

              <p>✔ Books</p>

              <p>✔ Gaming Consoles</p>

              <p>✔ Electronics</p>

            </div>

          </div>

          {/* NOT ALLOWED */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              ❌ Not Allowed
            </h2>

            <div className="space-y-2 text-sm">

              <p>✖ Illegal Products</p>

              <p>✖ Fake Products</p>

              <p>✖ Weapons</p>

              <p>✖ Drugs</p>

              <p>✖ Damaged Scam Products</p>

            </div>

          </div>

        </div>





        {/* RIGHT SIDE */}

        <div className="p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Signup Form
          </h2>

          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-5"
          >

            {/* EMAIL */}

            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* USERNAME */}

            <input
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter User Name"
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* PASSWORD */}

            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />



            {/* CHECKBOX */}

            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => {

                  setAgree(
                    e.target.checked
                  )

                }}
                className="mt-1 h-4 w-4 cursor-pointer"
              />

              <p className="text-sm text-gray-600 leading-5">

                I agree to the Terms & Conditions and confirm that I will only upload genuine and allowed products on SwapNest.

              </p>

            </div>



            {/* BUTTON */}

            <button
              type="submit"
              disabled={!agree}
              className={`py-3 rounded-md 
                text-white
                 font-semibold
                  transition-all
                   duration-300 ${
                !agree
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >

              Signup

            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default Signup;