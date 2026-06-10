

// import { useRef, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Productdashboard = () => {

//   const navigate = useNavigate();

//   const fileInputRef = useRef(null);

//   const [loading, setLoading] = useState(false);
//   const [sent, setSent] = useState(false);

//   const [image, setImage] = useState(null);
//   const [about, setAbout] = useState("");
//   const [contact, setContact] = useState("");
//   const [address, setAddress] = useState("");
//   const [productName, setProductName] = useState("");

//   // ================= CREATE PRODUCT =================

//   const requestHandler = async (e) => {

//     e.preventDefault();

//     setLoading(true);
//     setSent(false);

//     try {

//       const formData = new FormData();

//       formData.append("image", image);
//       formData.append("about", about);
//       formData.append("contact", contact);
//       formData.append("address", address);
//       formData.append("productName", productName);

//       const res = await axios.post(
//         "http://localhost:5000/api/productdashboard",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log(res.data);

//       // ================= SUCCESS =================

//       if (res.data.success) {

//         setSent(true);

//         // RESET FORM
//         fileInputRef.current.value = "";

//         setImage(null);
//         setAbout("");
//         setContact("");
//         setAddress("");
//         setProductName("");

//         // REDIRECT TO ALL PRODUCTS
//         setTimeout(() => {

//           navigate("/allproducts");

//         }, 1000);
//       }

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6">

//       <form
//         onSubmit={requestHandler}
//         className="w-full max-w-7xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] p-6 lg:p-8 flex flex-col lg:flex-row gap-10"
//       >

//         {/* LEFT SIDE */}
//         <div className="w-full lg:w-[58%] flex flex-col gap-4">

//           {/* PRODUCT NAME */}
//           <input
//             type="text"
//             placeholder="Enter Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//             className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 
//             text-slate-700 placeholder:text-slate-400 outline-none 
//             focus:ring-2 focus:ring-indigo-500 shadow-sm"
//           />

//           {/* IMAGE UPLOAD */}
//           <div className="w-full h-[430px] border-2 border-dashed border-indigo-300 rounded-3xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">

//             <input
//               onChange={(e) => setImage(e.target.files[0])}
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               className="absolute inset-0 opacity-0 cursor-pointer"
//               required
//             />

//             {image ? (

//               <img
//                 src={URL.createObjectURL(image)}
//                 className="w-full h-full object-cover"
//                 alt="preview"
//               />

//             ) : (

//               <div className="flex flex-col items-center gap-3">

//                 <p className="text-slate-700 text-lg font-semibold">
//                   Upload Product Photo
//                 </p>

//                 <span className="text-sm text-slate-500">
//                   PNG, JPG or JPEG
//                 </span>

//               </div>

//             )}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full lg:w-[42%] flex flex-col gap-5">

//           <div>

//             <h1 className="text-3xl font-bold text-slate-800">
//               Product Request
//             </h1>

//             <p className="text-slate-500 mt-1 text-sm">
//               Fill all details carefully before submitting your request.
//             </p>

//           </div>

//           {/* ABOUT */}
//           <textarea
//             value={about}
//             onChange={(e) => setAbout(e.target.value)}
//             required
//             placeholder="About the product"
//             rows={5}
//             className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-slate-700 shadow-sm"
//           />

//           {/* CONTACT */}
//           <input
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//             type="tel"
//             maxLength={10}
//             pattern="[0-9]{10}"
//             placeholder="Enter Your Contact no."
//             className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 shadow-sm"
//           />

//           {/* ADDRESS */}
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             placeholder="Enter Your Address"
//             rows={3}
//             className="bg-slate-50 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-slate-700 shadow-sm"
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded-2xl text-white text-base font-semibold shadow-lg transition-all duration-300 ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : sent
//                 ? "bg-green-600 hover:bg-green-700"
//                 : "bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-indigo-800 hover:to-blue-700"
//             }`}
//           >

//             {loading
//               ? "Creating..."
//               : sent
//               ? "Created ✔"
//               : "Create Product"}

//           </button>

//         </div>

//       </form>

//     </div>
//   );
// };

// export default Productdashboard;

import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

//   const requestHandler = async (e) => {

//     e.preventDefault();

//     setLoading(true);
//     setSent(false);

//     try {

//       // USER DATA
//       const user = JSON.parse(
//         localStorage.getItem("user")
//       );
//       const token = localStorage.getItem(
//   "token"
// );

//       const formData = new FormData();

//       // USER INFO
//       formData.append(
//         "userId",
//         user._id
//       );

//       formData.append(
//         "userName",
//         user.userName
//       );

//       // PRODUCT INFO

//       formData.append(
//         "image",
//         image
//       );

//       formData.append(
//         "about",
//         about
//       );

//       formData.append(
//         "contact",
//         contact
//       );

//       formData.append(
//         "address",
//         address
//       );

//       formData.append(
//         "productName",
//         productName
//       );

//       const res = await axios.post(

//         "http://localhost:5000/api/productdashboard",

//         formData,

//         {
//           headers: {
//             "Content-Type":"multipart/form-data"
//           }
//         }

//       );

//       console.log(res.data);

//       if(res.data.success){

//         setSent(true);

//         fileInputRef.current.value="";

//         setImage(null);
//         setAbout("");
//         setContact("");
//         setAddress("");
//         setProductName("");

//         setTimeout(()=>{

//           navigate("/allproducts");

//         },1000);

//       }

//     }

//     catch(error){

//       console.log(error);

//     }

//     finally{

//       setLoading(false);

//     }

//   };

const requestHandler = async (e) => {

  e.preventDefault();

  setLoading(true);
  setSent(false);

  try {

    // USER DATA

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const token = localStorage.getItem(
      "token"
    );

    const formData = new FormData();

    // USER INFO

    formData.append(
      "userId",
      user._id
    );

    formData.append(
      "userName",
      user.userName
    );

    // PRODUCT INFO

    formData.append(
      "image",
      image
    );

    formData.append(
      "about",
      about
    );

    formData.append(
      "contact",
      contact
    );

    formData.append(
      "address",
      address
    );

    formData.append(
      "productName",
      productName
    );

    const res = await axios.post(

      "http://localhost:5000/api/productdashboard",

      formData,

      {
        headers: {

          Authorization:
          `Bearer ${token}`,

          "Content-Type":
          "multipart/form-data"

        }
      }

    );

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

    alert(
      error.response?.data?.message ||
      "Failed To Create Product"
    );

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
onChange={(e)=>setProductName(e.target.value)}
required
className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3"
/>

<div className="w-full h-[430px] border-2 border-dashed border-indigo-300 rounded-3xl flex items-center justify-center relative overflow-hidden">

<input
onChange={(e)=>setImage(e.target.files[0])}
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

<span>
PNG, JPG or JPEG
</span>

</div>

)}

</div>

</div>


<div className="w-full lg:w-[42%] flex flex-col gap-5">

<textarea
value={about}
onChange={(e)=>setAbout(e.target.value)}
required
placeholder="About Product"
rows={5}
className="border rounded-2xl p-3"
/>


<input
value={contact}
onChange={(e)=>setContact(e.target.value)}
required
type="tel"
placeholder="Contact"
className="border rounded-2xl p-3"
/>


<textarea
value={address}
onChange={(e)=>setAddress(e.target.value)}
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

{loading
? "Creating..."
: sent
? "Created ✔"
: "Create Product"}

</button>

</div>

</form>

</div>

);

};

export default Productdashboard;

