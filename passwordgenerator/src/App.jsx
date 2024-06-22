import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [SpCharAllowed, setspcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef()                 // refrence for selection
   const generatePassword = useCallback(()=> {                       //generatepassword logic
         let pass=" "
         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
         if(numberAllowed) str+="0123456789"
         if(SpCharAllowed) str+="!@#%^&*,._-+"
          
         for(let i=1; i<length; i++) {
            const num = Math.floor(Math.random() * str.length + 1)
             pass +=str.charAt(num)
             }
             setPassword(pass)
   },[length,numberAllowed, SpCharAllowed])                       
   
   
   const CopytoClipboard= () =>{                             //Copypassword to clipboard function
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    }
   useEffect(() => {                              // when to generate password 
    generatePassword()
   }, [length,numberAllowed,SpCharAllowed])          //parameters on basis of which password is going to be generated

  return (
    <div className='w-full h-screen bg-gray-800 text-orange-400'>
    <h1 className='text-center px-3 py-3 text-white pt-10 text-xl'>PASSWORD GENERATOR</h1>
    <div className='flex items-center justify-center px-3 py-3 rounded max-w-xl mx-auto mt-5'>
      <input type='text' className=' px-3 py-3 grow '
      Readonly value={password} 
      ref={passwordRef} 
      placeholder='Password'></input>
      <button className='bg-blue-600 px-3 py-3 rounded text-white' onClick={CopytoClipboard}>COPY</button>
    </div>
    <div className='flex items-center justify-center gap-x-4'>
                 <input type='range' className='cursor-pointer' 
                 min={6}
                 max={100}
                 value={length} 
                 onChange={(e) => setlength(e.target.value)}></input>
                   <label htmlFor="length">Length: {length}</label>
                 <input type='checkbox' className='' 
                 defaultChecked ={numberAllowed}
                 onChange={()=> { setNumberAllowed((prev)=> !prev)}}></input>
                   <label htmlFor="number">Numbers</label>
                   <input type='checkbox' className='' 
                   defaultChecked={SpCharAllowed} 
                   onChange={()=> { setspcharAllowed((prev) =>!prev)}}></input>
                   <label htmlFor="SPCharacter">Special Characters</label>
            </div>
</div>
  )
}

export default App
