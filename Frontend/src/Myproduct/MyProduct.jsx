import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const backendUrl =
    import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
    "http://localhost:5000";

  useEffect(() => {
    getMyProducts();
  }, []);

  const getMyProducts = async () => {
    if (!user) return;
    try {
      const res = await api.get("/product/all");
      const myProducts = res.data.filter(
        (product) => product.userId === user._id
      );
      setProducts(myProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getMyProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="bg-white rounded-xl p-4 shadow-lg">
            <img
              src={
                p.image?.startsWith("/uploads")
                  ? `${backendUrl}${p.image}`
                  : `${backendUrl}/${p.image}`
              }
              alt={p.productName}
              className="h-52 w-full rounded object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Image+Not+Found";
              }}
            />
            <h2 className="text-xl font-bold mt-3">{p.productName}</h2>
            <p className="text-gray-600 mt-2">{p.about}</p>
            <p className="text-sm text-gray-500 mt-2">Contact: {p.contact}</p>
            <p className="text-sm text-gray-500">Address: {p.address}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => navigate(`/editproduct/${p._id}`)}
                className="flex-1 bg-blue-600 text-white py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(p._id)}
                className="flex-1 bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;