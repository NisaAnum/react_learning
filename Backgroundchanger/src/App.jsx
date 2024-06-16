import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('skyblue')

  return (
    
    <div className='h-screen duration-200 w-full' style={{backgroundColor: color}} >
       <div className=' flex flex-wrap inset-x-0 fixed bottom-8 justify-center'>
     <div className='flex flex-wrap px-2 py-2 bg-white shadow-lg rounded-3xl  justify-center'>
     <button className='px-4 py-3 m-2 shadow-lg rounded-2xl' onClick={() => setColor("Red")} style={{backgroundColor: 'red', color: 'white'}}>Red</button>
     <button className='px-4 py-3 m-2 shadow-lg rounded-2xl' onClick={() => setColor("Green")} style={{backgroundColor: 'green', color: 'white'}}>Green</button>
     <button className='px-4 py-3 m-2 shadow-lg rounded-2xl' onClick={() => setColor("blue")} style={{backgroundColor: 'Blue', color: 'white'}}>Blue</button>
     <button className='px-4 py-3 m-2 shadow-lg rounded-2xl' onClick={() => setColor("olive")} style={{backgroundColor: 'olive', color: 'white'}}>Olive</button>
     </div>
     </div>
    </div>
      
    
  )
}

export default App
