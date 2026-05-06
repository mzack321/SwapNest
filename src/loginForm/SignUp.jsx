import { useState } from "react"


const SignUp = ({handleLogin})=>{
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const  submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(userName, email, password);
        setUserName('')
        setEmail('')
        setPassword('')
        
    }
    return(
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col gap-4">
             <h1 className="text-2xl font-bold text-center text-gray-700">SignUp form</h1>

             <input 
             value={userName}
             onChange={(e)=>{setUserName(e.target.value)}}
               type="text"  
               placeholder="Enter Your User Name"
               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             />

             <input 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
               type="email" 
               placeholder="Emter Your Email Adress"
               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             />

             <input 
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
               type="password" 
               placeholder="Enter Youe Password"
               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             />

             <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
               Please signUp
             </button>
        </form>
    )
}
export default SignUp;

