

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./loginForm/Login";
import Signup from "./loginForm/Signup";

import Productdashboard from "./Dashboard/Productdashboard";
import Allproducts from "./Dashboard/Allproducts";
import Welcome from "./Dashboard/Welcome";

import MyRequests from "./Myrequest/MyRequests";
import MyProducts from "./Myproduct/MyProduct";

import EditProduct from "./Editproduct/EditProduct";

import Navbar from "./Navbar/Navbar";

import Profile from "./Profile/Profile";

import ProtectedRoute from "./AuthContext/ProtectedRoute";
import PublicRoute from "./AuthContext/PublicRoute";



const App = () => {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>


                {/* LOGIN */}

                <Route

                    path="/login"

                    element={

                        <PublicRoute>

                            <Login />

                        </PublicRoute>

                    }

                />



                {/* SIGNUP */}

                <Route

                    path="/signup"

                    element={

                        <PublicRoute>

                            <Signup />

                        </PublicRoute>

                    }

                />



                {/* WELCOME */}

                <Route

                    path="/welcome"

                    element={

                        <ProtectedRoute>

                            <Welcome />

                        </ProtectedRoute>

                    }

                />



                {/* CREATE PRODUCT */}

                <Route

                    path="/productdashboard"

                    element={

                        <ProtectedRoute>

                            <Productdashboard />

                        </ProtectedRoute>

                    }

                />



                {/* ALL PRODUCTS */}

                <Route

                    path="/allproducts"

                    element={

                        <ProtectedRoute>

                            <Allproducts />

                        </ProtectedRoute>

                    }

                />



                {/* MY REQUESTS */}

                <Route

                    path="/myrequests"

                    element={

                        <ProtectedRoute>

                            <MyRequests />

                        </ProtectedRoute>

                    }

                />



                {/* MY PRODUCTS */}

                <Route

                    path="/myproducts"

                    element={

                        <ProtectedRoute>

                            <MyProducts />

                        </ProtectedRoute>

                    }

                />



                {/* EDIT PRODUCT */}

                <Route

                    path="/editproduct/:id"

                    element={

                        <ProtectedRoute>

                            <EditProduct />

                        </ProtectedRoute>

                    }

                />



                {/* PROFILE */}

                <Route

                    path="/profile"

                    element={

                        <ProtectedRoute>

                            <Profile />

                        </ProtectedRoute>

                    }

                />



                {/* DEFAULT */}

                <Route

                    path="*"

                    element={

                        <ProtectedRoute>

                            <Welcome />

                        </ProtectedRoute>

                    }

                />

            </Routes>

        </BrowserRouter>

    );

};

export default App;