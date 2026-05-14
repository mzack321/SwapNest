

import { useState } from "react";
import Login from "./loginForm/Login";
import Signup from "./loginForm/Signup";
import Productdashboard from "./Dashboard/Productdashboard";

const App = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {!isLoggedIn ? (
        isSignup ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Signup setIsSignup={setIsSignup} />
        )
      ) : (
        <Productdashboard />
      )}

    </div>
  );
};

export default App;