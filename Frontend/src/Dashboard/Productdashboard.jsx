import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Productdashboard = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [image, setImage] = useState(null);
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [productName, setProductName] = useState("");

  const requestHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("userId", user._id);
      formData.append("userName", user.userName);
      formData.append("image", image);
      formData.append("about", about);
      formData.append("contact", contact);
      formData.append("address", address);
      formData.append("productName", productName);

      const res = await api.post("/product/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);

      if (res.data.success) {
        setSent(true);
        fileInputRef.current.value = "";
        setImage(null);
        setAbout("");
        setContact("");
        setAddress("");
        setProductName("");

        setTimeout(() => {
          navigate("/allproducts");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed To Create Product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6">
      <form
        onSubmit={requestHandler}
        className="w-full max-w-7xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] p-6 lg:p-8 flex flex-col lg:flex-row gap-10"
      >
        <div className="w-full lg:w-[58%] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3"
          />
          <div className="w-full h-[430px] border-2 border-dashed border-indigo-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              required
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="w-full h-full object-cover"
                alt=""
              />
            ) : (
              <div className="flex flex-col items-center">
                <p>Upload Product Photo</p>
                <span>PNG, JPG or JPEG</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[42%] flex flex-col gap-5">
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            placeholder="About Product"
            rows={5}
            className="border rounded-2xl p-3"
          />
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            type="tel"
            placeholder="Contact"
            className="border rounded-2xl p-3"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Address"
            rows={3}
            className="border rounded-2xl p-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-700 text-white py-3 rounded-2xl"
          >
            {loading ? "Creating..." : sent ? "Created ✔" : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Productdashboard;

