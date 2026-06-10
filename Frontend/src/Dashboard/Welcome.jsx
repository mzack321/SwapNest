import { useEffect, useState } from "react";

const Welcome = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4">

      <div
        className={`transition-all duration-1000 transform ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } bg-white shadow-2xl rounded-2xl max-w-4xl w-full overflow-hidden`}
      >

        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="SwapNest"
            className="w-full h-64 md:h-96 object-cover"
          />

          {/* Overlay Text Animation */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold animate-pulse">
              Welcome to SwapNest 🚀
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 text-center">

          <p className="text-gray-600 text-sm md:text-lg mb-6 animate-fade-in">
            Your smart marketplace to buy, sell and exchange products easily.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="/allproducts"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition"
            >
              Explore Products
            </a>

            <a
              href="/productdashboard"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition"
            >
              Go to Dashboard
            </a>

          </div>

        </div>
      </div>

    

    </div>
  );
};

export default Welcome;