
import { useRef, useState } from "react";
import axios from "axios";

const Productdashboard = () => {
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [image, setImage] = useState(null);
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const requestHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/productdashboard",
        {
          image: image?.name,
          about,
          contact,
          address,
        }
      );

      console.log(res.data);
      alert(res.data.message);

      setSent(true);

      fileInputRef.current.value = "";
      setImage(null);
      setAbout('');
      setContact('');
      setAddress('');

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6">

      <form
        onSubmit={requestHandler}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8"
      >

        <div className="w-full max-w-md h-[500px] border-2 border-dashed border-indigo-300 rounded-3xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">

          <input
            onChange={(e) => setImage(e.target.files[0])}
            ref={fileInputRef}
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            required
          />

          {image ? (
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <p className="text-slate-700 text-lg font-semibold">
                Upload Product Photo
              </p>
              <span className="text-sm text-slate-500">
                PNG, JPG or JPEG
              </span>
            </div>
          )}

        </div>

        <div className="flex-1 flex flex-col gap-5">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Product Request
            </h1>

            <p className="text-slate-500 mt-1 text-sm">
              Fill all details carefully before submitting your request.
            </p>
          </div>

          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            placeholder="About the product"
            rows={5}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-slate-700 shadow-sm"
          />

          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            type="tel"
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Enter Your Contact no."
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
          />

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter Your Address"
            rows={3}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-slate-700 shadow-sm"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-2xl text-white text-base font-semibold shadow-lg transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : sent
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-indigo-800 hover:to-blue-700"
            }`}
          >
            {loading ? "Sending..." : sent ? "Sent ✔" : "Send request"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default Productdashboard;