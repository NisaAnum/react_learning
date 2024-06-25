import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className="py-20 text-xl justify-center content-center w-full bg-white shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold mb-4 text-center"> User: {userid}</h1>
  </div>
  )
}

export default User