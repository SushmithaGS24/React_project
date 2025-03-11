
import './App.css';
import './index.css';

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  
  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const found = existingUsers.some((user) => user.name === name);
    if(found){
      alert("User exists");
    } else {
      existingUsers.push({ name, password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert("Registered");
    } 
    setName('');
    setPassword('');
  }


  return (
   <>
  
   <div className = "flex items-center justify-center h-screen bg-gray-100">

   <form onSubmit={onSubmit} className="space-y-4 flex flex-col items-center justify-cente w-screen max-w-sm  h-[400px] rounded-lg p-8 shadow-md bg-blue-100">
   <h1 className="text-black font-bold">Login Page</h1>
    <label htmlFor="username" className=" block text-black font-semibold">UserName</label>
    
    <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100" required onChange={(e) => setName(e.target.value)} type="text" name="username" placeholder ="Enter your name" value={name}/> <br/>
    <label htmlFor="password" className="block text-black font-semibold mb-2"> Password </label>
    <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
       onChange={(e) => setPassword(e.target.value)}  type="text" name="password" placeholder ="Enter your Password" value={password} required/>
    <button type="submit" className="w-20 h-[40px] rounded-sm bg-pink-200">Login</button>
   </form>
   </div>
   </>
  );
}

export default App;
