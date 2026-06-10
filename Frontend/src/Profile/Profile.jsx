
import React from "react";

const Profile=()=>{

const user=
JSON.parse(
localStorage.getItem("user")
);

return(

<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center p-6">

<div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

<div className="flex flex-col items-center">

<div className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold">

{user?.userName?.charAt(0).toUpperCase()}

</div>

<h1 className="text-2xl font-bold mt-4">

{user?.userName}

</h1>

<p className="text-gray-500">

My Profile

</p>

</div>


<div className="mt-8 space-y-4">

<div className="bg-gray-100 p-3 rounded-xl">

<p className="text-gray-500">

Name

</p>

<p className="font-semibold">

{user?.userName}

</p>

</div>


<div className="bg-gray-100 p-3 rounded-xl">

<p className="text-gray-500">

Email

</p>

<p className="font-semibold">

{user?.email}

</p>

</div>


<div className="bg-gray-100 p-3 rounded-xl">

<p className="text-gray-500">

User ID

</p>

<p className="font-semibold">

{user?._id}

</p>

</div>

</div>

</div>

</div>

);

};

export default Profile;