

import { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-xl flex flex-col gap-4"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-700">
          SignUp Form
        </h1>

        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter Your User Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 font-semibold">
          Please SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;