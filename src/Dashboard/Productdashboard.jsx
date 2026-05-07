// import { useState } from "react";


// const Productdashboard = () => {
//   const [issent, setIssent] = useState(false);
//   const [image, setImage] = useState(null);
//   const [about, setAbout] = useState('');
//   const [contact, setContact] = useState('');
//   const [adress, setAdress] = useState('');
  
//   const sentHandle = ()=>{
//     setIssent(!issent)
//   }
//   const requestHandler = (e)=>{
//     e.preventDefault();
//     setImage(null);
//     setAbout('');
//     setContact('');
//     setAdress('');
//   }

//   return (
//     <div className="flex flex-col items-center p-6">
//       {/* Form */}
      
//     <form
//     onSubmit={(e)=>{
//       requestHandler(e)
//     }}
//        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 flex flex-col gap-4">
//   {/* Image Upload Div */}
//       <div className="w-72 h-52 border-2 border-dashed border-gray-400 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
        
//         <input 
//         value={image}
//         onChange={(e)=>{
//           setImage(e.target.files)
//         }}
//           type="file"
//           className="absolute inset-0 opacity-0 cursor-pointer" 
//           required
//         />

//         <p className="text-gray-500 font-medium">
//           Choose File Photo
//         </p>
//       </div>
//         <textarea
//         value={about}
//         onChange={(e)=>{
//           setAbout(e.target.value)
//         }}
//         required
//           placeholder="About the product" rows={7} cols={20}
//           className=" border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//         ></textarea>

//         <input
//         value={contact}
//         onChange={(e)=>{
//           setContact(e.target.value)
//         }}
//         required
//           type="tel"
//           placeholder="Enter Your Contact no."
//           className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <textarea
//         value={adress}
//         onChange={(e)=>{
//           setAdress(e.target.value)
//         }}
//         required
//           placeholder="Enter Your Address"
//           className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//         ></textarea>
//         <button onClick={sentHandle}
//         className={`px-5 py-2 rounded-xl text-white font-medium ${issent ? "bg-red-800" : "bg-blue-800"}`}
//         >
//           {issent ? "Cancel request" : "Send request"}
//         </button>
//       </form>

//     </div>
//   );
// };

// export default Productdashboard;

import { useRef, useState } from "react";

const Productdashboard = () => {
  const fileInputRef = useRef(null);
  const [issent, setIssent] = useState(false);
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');
  const [adress, setAdress] = useState('');

  const sentHandle = () => {
    setIssent(!issent)
  }

  const requestHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.value = "";
    setImage(null);
    setAbout('');
    setContact('');
    setAdress('');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6">

      <form
        onSubmit={(e) => {
          requestHandler(e)
        }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8"
      >

        {/* Left Side Image Upload */}

        <div className="w-full max-w-md h-[500px] border-2 border-dashed border-indigo-300 rounded-3xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">

  <input
    onChange={(e) => {
      setImage(e.target.files[0])
    }}
    ref={fileInputRef}
    type="file"
    className="absolute inset-0 opacity-0 cursor-pointer "
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

        {/* Right Side Form */}
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
            onChange={(e) => {
              setAbout(e.target.value)
            }}
            required
            placeholder="About the product"
            rows={5}
            cols={20}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-slate-700 shadow-sm"
          ></textarea>

          <input
            value={contact}
            onChange={(e) => {
              setContact(e.target.value)
            }}
            required
            type="tel"
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Enter Your Contact no."
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
          />

          <textarea
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value)
            }}
            required
            placeholder="Enter Your Address"
            rows={3}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-slate-700 shadow-sm"
          ></textarea>

          <button 
          type="submit"
            onClick={sentHandle}
            className={`w-full py-3 rounded-2xl text-white text-base font-semibold shadow-lg transition-all duration-300 ${
              issent
                ? "bg-gradient-to-r from-red-700 to-rose-600 hover:from-red-800 hover:to-rose-700"
                : "bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-indigo-800 hover:to-blue-700"
            }`}
          >
            {issent ? "Cancel request" : "Send request"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default Productdashboard;