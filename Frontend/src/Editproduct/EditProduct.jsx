import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await api.get(`/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProductName(res.data.productName || "");
        setAbout(res.data.about || "");
        setContact(res.data.contact || "");
        setAddress(res.data.address || "");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id, token]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await api.put(
        `/product/${id}`,
        {
          productName,
          about,
          contact,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/myproducts");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to update product");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center px-4 py-8">
      <form
        onSubmit={updateProduct}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
          <p className="text-gray-500 mt-2">Update your product details</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            About Product
          </label>
          <textarea
            placeholder="Enter product description"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            placeholder="Enter contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            maxLength={10}
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address
          </label>
          <textarea
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;