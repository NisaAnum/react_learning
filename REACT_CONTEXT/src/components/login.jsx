import { useState , useContext} from "react"
import React from 'react'
import userContext from "../context/userContext"

function login() {
  const [user, setUsername] =useState()
  const [email, setEmail] = useState()

  const {setUser} = useContext(userContext)

  const handleSubmit = (e) => {
   e.preventDefault()
   setUser({user, email})

  }

  return (
    <div className="p-8 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="text"
        value={user}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default login