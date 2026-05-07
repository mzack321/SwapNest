
import { useState } from "react";

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.peventDefault();
    setUserName('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-10 rounded-xl shadow-lg flex flex-col justify-center gap-5"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700">
          Login
        </h2>

        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter User Name"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your password"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition font-semibold w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;