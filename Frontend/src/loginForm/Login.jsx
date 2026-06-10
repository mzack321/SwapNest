
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api";
import {useAuth} from "../AuthContext/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ IMPORTANT FIX

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     console.log(res.data);

  //     if (res.status === 200) {
  //       alert(res.data.message);

  //       // ✅ 1. Save in context + localStorage
  //       login(res.data.user || res.data);

  //       // (optional safety)
  //       localStorage.setItem(
  //         "user",
  //         JSON.stringify(res.data.user || res.data)
  //       );

  //       // ✅ 2. GO TO WELCOME PAGE (NOT dashboard)
  //       navigate("/welcome");
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     alert(
  //       error.response?.data?.message ||
  //       "Wrong Email or Password"
  //     );
  //   }
  // };
const submitHandler = async (e) => {

  e.preventDefault();

  try {

    const res = await api.post(

      "/login",

      {
        email,
        password,
      }

    );

    console.log(res.data);

    if (res.status === 200) {

      alert(res.data.message);

      // AuthContext me user save

      login(res.data.user);

      // User localStorage me save

      localStorage.setItem(

        "user",

        JSON.stringify(res.data.user)

      );

      // JWT Token localStorage me save

      localStorage.setItem(

        "token",

        res.data.token

      );

      // Welcome Page

      navigate("/welcome");

    }

  } catch (error) {

    console.log(error);

    alert(

      error.response?.data?.message ||

      "Wrong Email or Password"

    );

  }

};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      <form
        onSubmit={submitHandler}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg flex flex-col gap-5"
      >

        <h2 className="text-xl font-bold text-center">
          Login Form
        </h2>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-md"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer"
          >
            Signup
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;
