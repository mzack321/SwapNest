import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!user) return;

    getRequests();
    const interval = setInterval(() => {
      getRequests();
    }, 2000);

    return () => clearInterval(interval);
  }, [user]);

  const getRequests = async () => {
    if (!user) return;

    try {
      const res = await api.get(`/request/all-requests/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const receivedRequests = res.data.filter(
        (req) => req.receiveId === user._id
      );

      setRequests(receivedRequests);
    } catch (err) {
      console.log(err);
    }
  };

  const acceptRequest = async (req) => {
    if (!user) return;

    try {
      await api.put(
        `/request/update-request/${req._id}`,
        {
          status: "accepted",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await getRequests();
      navigate(`/chat/${req.senderId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const rejectRequest = async (id) => {
    if (!user) return;

    try {
      await api.put(
        `/request/update-request/${id}`,
        {
          status: "rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await getRequests();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.length === 0 ? (
          <p className="text-center text-xl">No Requests Found</p>
        ) : (
          requests.map((req) => (
            <div
              key={req._id}
              className="bg-white p-5 rounded-xl shadow-lg"
            >
              <h2 className="font-bold text-lg">Request Received</h2>

              <p className="mt-2">Product ID: {req.productId}</p>
              <p className="mt-2">
                Status: <span className="font-bold">{req.status}</span>
              </p>

              {req.status === "pending" && (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => acceptRequest(req)}
                    className="bg-green-600 text-white flex-1 py-2 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => rejectRequest(req._id)}
                    className="bg-red-600 text-white flex-1 py-2 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}

              {req.status === "accepted" && (
                <p className="text-green-600 mt-4 font-bold">Accepted</p>
              )}

              {req.status === "rejected" && (
                <p className="text-red-600 mt-4 font-bold">Rejected</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyRequests;