import React, { useState } from 'react';
import bgImage from './bg.jpg';
import { InputBox } from './components/index.js';
import useCurrency from './Hooks/useCurrency.jsx';



function App() {
  const [amount, setamount] = useState(0)
  const[from, setFrom] = useState('USD')
  const [To, setTo] = useState('PKR')
const [convertedAmount, setConvertedAmount] =useState(0)


 const currencyInfo = useCurrency(from)
 const options = Object.keys(currencyInfo)

 const convert = () => {
      setConvertedAmount(amount * currencyInfo[To])
 }

 const swap = () => {
  setFrom(To);
  setTo(from);
  setamount(convertedAmount);
  setConvertedAmount(amount);
  
 }

  return (
    <div className='flex bg-no-repeat bg-cover bg-center items-center justify-center w-full h-screen' style={{ backgroundImage: `url(${bgImage})` }}>
  <div className='rounded-lg backdrop-blur-sm w-full max-w-md mx-auto p-4 bg-white'>
    <form onSubmit={(e) => {
      e.preventDefault();
      convert();
    }}>
      <div className='mb-4'>
        <div className='w-full flex justify-center'>
          <div className='w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-lg p-4'>
            <InputBox 
              label='From'
              amount={amount}
              currencyInputoptions={options}
              currencyChange={(Currency) => setFrom(Currency)}
              amountChange={(amount) => setamount(amount)}
              selectedCurrency={from}
            />
          </div>
        </div>
      </div>

      <div className='relative w-full mb-4'>
        <button type='button'
          className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white
                     rounded-md bg-blue-600 text-white px-4 py-3 text-xl'
          onClick={swap}
        >
          Swap
        </button>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-lg p-4'>
          <InputBox 
            label='To'
            amount={convertedAmount}
            currencyInputoptions={options}
            currencyChange={(Currency) => setTo(Currency)}
            selectedCurrency={To}
            amountDisabled={true}
          />
        </div>
      </div>

      <button 
        type='submit' 
        className=' block mx-auto mt-4 bg-blue-500 text-white text-lg px-6 py-3 rounded-lg 
        shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:ring-opacity-50 grow'
      >
        Convert {from.toUpperCase()} to {To.toUpperCase()}
      </button>
    </form>
  </div>
</div>

  )
}

export default App
