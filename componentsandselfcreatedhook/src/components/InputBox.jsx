import {React, useId} from 'react'

function InputBox({
    label,
    amount,
    amountChange,
    currencyChange,
   amountDisabled=false,
    selectedCurrency ="USD",
    currencyInputoptions=[],
    className=''
}) {
    
    const id=useId()
  return (
    <div className="mx-auto max-w-md">
  <div className={`${className} bg-white flex items-center rounded p-3`}>
    <div className="w-1/2">
      <label htmlFor={id} className="block text-gray-400 text-sm p-1 rounded">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={amount}
        placeholder="Amount"
        disabled={amountDisabled}
        onChange={(e) => (amountChange && amountChange(Number(e.target.value)))}
        className="block w-full p-1 mt-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <div className="w-1/2 flex flex-col items-end">
      <label className="block text-gray-400 text-sm p-1 rounded mt-1">
        Currency Type
      </label>
      <select
        className="block w-full p-1 mt-1 rounded cursor-pointer bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
        value={selectedCurrency}
        onChange={(e) => (currencyChange && currencyChange(e.target.value))}
      >
        {currencyInputoptions.map((Currency) => (
          <option key={Currency} value={Currency}>
            {Currency}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>
  )
}

export default InputBox