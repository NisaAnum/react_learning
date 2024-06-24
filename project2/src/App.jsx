import { useState } from 'react'

import './App.css'



 
function App() {
  const [counter, setcounter] = useState(0)     /* counter is a variable and setcounter is methode which is going 
to be returned from useStates and counter variable will be updated automatically at all places in UI interface where it is being
used
*/

const AddValue = () => {
  setcounter((prevCounter) => prevCounter +1 )
  setcounter((prevCounter) => prevCounter +1 )
  setcounter((prevCounter) => prevCounter +1 )
  setcounter((prevCounter) => prevCounter +1 )
}

const removeValue = () => {
  setcounter(counter  - 1 )
}

  return (
    <>
    <h1> React COURSE DOING IN 2024 SUMMER VACATIONS </h1>
    <h2>It's Fun to Learn that how react udpates and manage the states </h2>
      <h3> Counter value {counter} being updated on every click on Add or remove button </h3>
    <button onClick={AddValue} >Add Value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    <h3>Counter value {counter} also being updated here too</h3>
    <h4>It actually increases 4 times and decrease by 1 on every click of add or remove value button Click respectively</h4>
    </>
  )
}

export default App
