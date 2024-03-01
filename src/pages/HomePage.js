import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className=' flex-wrap flex gap-5 w-3/4' >
      <div className='w-72 h-60 ml-4 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>

      <div className='w-72 h-60 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>

      <div className='w-72 h-60 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>
      <div className='w-72 h-60 ml-4 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>
      <div className='w-72 h-60 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>
      <div className='w-72 h-60 bg-blue-300 rounded-md p-4 justify-center flex flex-col items-center'>
        <h3>Block</h3>
        <FaIndianRupeeSign width={15}/>
        <h3>Amount</h3>
      </div>
    </div>
  )
}

export default HomePage