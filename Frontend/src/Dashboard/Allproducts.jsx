import React, { useEffect, useState } from "react";
import api from "../api";

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [requests, setRequests] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const backendUrl =
    import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
    "http://localhost:5000";

  useEffect(() => {
    getProducts();
    getRequests();

    const interval = setInterval(() => {
      getRequests();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getProducts = async () => {
    try {
      const res = await api.get("/product/all");
      const validProducts = res.data.filter(
        (product) => product.userId && product.userId !== user._id
      );
      setProducts(validProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const getRequests = async () => {
    try {
      const res = await api.get(`/request/all-requests/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendRequest = async (productId, ownerId, receiverName) => {
    try {
      await api.post(
        "/request/send-request",
        {
          senderId: user._id,
          ownerId,
          receiverName,
          productId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await getRequests();
    } catch (err) {
      console.log(err);
    }
  };

  const updateRequest = async (id, status) => {
    try {
      await api.put(
        `/request/update-request/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await getRequests();
    } catch (err) {
      console.log(err);
    }
  };

  const cancelRequest = async (id) => {
    try {
      await api.delete(`/request/cancel-request/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getRequests();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => {
          const req = requests.find((r) => String(r.productId) === String(p._id));

          return (
            <div key={p._id} className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={
                  p.image?.startsWith("/uploads")
                    ? `${backendUrl}${p.image}`
                    : `${backendUrl}/uploads/${p.image}`
                }
                alt={p.productName}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-3">{p.productName}</h2>
              <p className="text-gray-600">{p.about}</p>
              <p className="text-sm text-gray-500">Owner: {p.userName}</p>

              {!req && (
                <button
                  onClick={() => sendRequest(p._id, p.userId, p.userName)}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
                >
                  Send Request
                </button>
              )}

              {req?.senderId === user._id && req.status === "pending" && (
                <div>
                  <p className="text-blue-600 mt-2">Request Sent To: {req.receiverName}</p>
                  <button
                    onClick={() => cancelRequest(req._id)}
                    className="w-full mt-3 bg-yellow-500 text-white py-2 rounded"
                  >
                    Cancel Request
                  </button>
                </div>
              )}

              {req?.receiveId === user._id && req.status === "pending" && (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => updateRequest(req._id, "accepted")}
                    className="flex-1 bg-green-600 text-white py-2 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateRequest(req._id, "rejected")}
                    className="flex-1 bg-red-600 text-white py-2 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}

              {req?.status === "accepted" && (
                <div className="mt-4 border-t pt-3">
                  <p className="text-green-600 font-bold">Accepted ✅</p>
                  <p className="mt-2">Contact: {p.contact}</p>
                  <p className="mt-2">Address: {p.address}</p>
                </div>
              )}

              {req?.status === "rejected" && (
                <p className="text-red-600 font-bold mt-4">Rejected</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;

