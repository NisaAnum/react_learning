import React from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
  const data = useLoaderData(); // Assuming useLoaderData fetches GitHub user data

  return (
    <div className="py-20 text-xl justify-center w-full bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Name: {data.login}</h1>
      <p className="text-lg text-gray-700">{data.bio}</p>
    </div>
  );
}

export default Github

export const GithubInfo = async () => {
    const res = await fetch('https://api.github.com/users/NisaAnum')
    return res.json()
}