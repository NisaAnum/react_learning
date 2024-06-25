import React, { useState } from 'react'
import userContext from './userContext'



const contextProvider = ({children}) => {
    const [user, setUser] =useState()              
    
    return (
<userContext.Provider value={{user, setUser}} >        // going to be global and can be accessed or updated in any component using useContext hook

{children}
    </userContext.Provider>
    )
}

export default contextProvider