import {React, useContext} from 'react'
import userContext from '../context/userContext'



function profile() {
    const {user} =useContext(userContext)
    if (!user) return <h2 className="text-center text-red-900 mt-4">Not Logged In</h2>;
        return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">User Profile</h2>
          <div className="flex flex-col space-y-2">
            <div>
              <span className="font-semibold">User Name:</span> {user.user}
            </div>
            <div>
              <span className="font-semibold">User Email:</span> {user.email}
            </div>
          </div>
        </div>
      );
    
}

export default profile