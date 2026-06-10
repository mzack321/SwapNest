
// import React, {useState, useEffect }  from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:500");

// const Chat  =()=>{
//     const [message,  setMessage] = useState("");
//     const [messages, setMessages] = useState([]);

//     const sendMessage = ()=>{
// socket.emit("SendMesage",{
//     message
// });
// setMessage("");
//     };
//     useEffect(()=>{
//         socket.on("receiveMessage", 
//             (data)=>{
//                 setMessages((prev)=>[
//                     ...prev, data
//                 ]);
//             }
//         )
//     },[])


// return(
//     <div className="p-6">
//         <h1>Real Time Chat </h1>

//         <div>
// {
//     messages.map((m, i)=>(
//   <p key={i}>{m.message}</p>
//     ))
// }
//         </div>
//         <input type="text"
//         value={message}
//         onChange={(e)=>{
//             setMessage(e.target.value)
//         }} />

//         <button onClick={sendMessage}> send </button>
//     </div>
// )};

// export default Chat;

// import React,{useEffect,useState} from "react";

// import axios from "axios";

// import io from "socket.io-client";



// // SOCKET CONNECTION

// const socket=
// io(
// "http://localhost:5000"
// );



// const Chat=()=>{

// const [message,setMessage]
// =
// useState("");

// const [messages,setMessages]
// =
// useState([]);

// const user=
// JSON.parse(
// localStorage.getItem("user")
// );




// // SEND MESSAGE

// const sendMessage=
// async()=>{

// if(!message) return;


// const data={

// senderId:user._id,

// message

// };



// // SOCKET SEND

// socket.emit(

// "sendMessage",

// data

// );



// // DATABASE SAVE

// await axios.post(

// "http://localhost:5000/api/save-message",

// data

// );



// // LOCAL UI

// setMessages(

// (prev)=>[

// ...prev,
// data

// ]

// );


// setMessage("");

// };




// // RECEIVE MESSAGE

// useEffect(()=>{

// socket.on(

// "receiveMessage",

// (data)=>{

// setMessages(

// (prev)=>[

// ...prev,
// data

// ]

// );

// }

// );


// return()=>{

// socket.off(
// "receiveMessage"
// );

// };

// },[]);




// return(

// <div className="min-h-screen bg-gray-100 flex flex-col">

// {/* HEADER */}

// <div className="bg-blue-600 text-white p-4 text-2xl font-bold shadow">

// Real Time Chat

// </div>



// {/* CHAT AREA */}

// <div className="flex-1 overflow-y-auto p-5 space-y-3">

// {

// messages.map((m,i)=>(

// <div
// key={i}
// className={`flex ${
// m.senderId===user._id
// ? "justify-end"
// : "justify-start"
// }`}
// >

// <div
// className={`px-4 py-2 rounded-2xl max-w-[300px] shadow ${
// m.senderId===user._id
// ? "bg-blue-600 text-white"
// : "bg-white text-black"
// }`}
// >

// {m.message}

// </div>

// </div>

// ))

// }

// </div>



// {/* INPUT AREA */}

// <div className="bg-white p-4 flex gap-3 border-t">

// <input

// type="text"

// value={message}

// onChange={(e)=>{

// setMessage(
// e.target.value
// )

// }}

// placeholder="Type message..."

// className="flex-1 border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"

// />



// <button

// onClick={sendMessage}

// className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition"

// >

// Send

// </button>

// </div>

// </div>

// );

// };

// export default Chat;

