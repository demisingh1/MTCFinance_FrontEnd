import React from 'react'
import { useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddCustomerPage = () => {
const navigate = useNavigate()
  // const[data, setData] = useState({})
const[values, setValue] = useState({customer:'', phoneno:'', amount:'', num:'', ProductAmount:'',AadharNumber:'',date:'', TotalLoanAmount:''})
const{customer, phoneno, amount, num, ProductAmount,AadharNumber,TotalLoanAmount, date} = values

// # Try to format moment() method
// let momentA = moment().format('YYYY-MM-DD');
// # 1. tried to add 1 Month in moment() on every iterations. It update the moment() by one.
//     moment().add(1, 'months')
// console.log(moment().add(1, 'months').format('YYYY-MM-DD'));
let DateFormat = moment(date).add(1, 'months').format('YYYY-MM-DD')
console.log(DateFormat);
let emis = [];
const getValues = (e)=>{
let value = e.target.value;
let name = e.target.name;
if(name === 'date' || 'customer'){
  value = e.target.value;
}
console.log(value, name);
setValue({...values, [name]:value})
}

const sendData = async ()=>{
  
  for(let i = 0; i<=num-1; i++){
    emis.push({amount:amount * 1, date:moment(date).add(i, 'months').format('YYYY-MM-DD'), serial:i+1 });
  }
  // setData({customer, phoneno, emis, ProductAmount, AadharNumber});
  // axios intigration
  const res =await axios.post(`http://localhost:8000/api/customer`,{
    customer, phoneno, emis, ProductAmount, AadharNumber, TotalLoanAmount
  })
  console.log(res);
  navigate('/')
}
// console.log(data);

  return (
    <div className=' w-full text-center bg-purple-400' >
      <h3>
        ADD Customers
      </h3>
      
     <form action="" className='flex flex-col content-center justify-center gap-10'  >
     <div  >
      <label htmlFor="customer">Customer Name</label>
      <input type="text" placeholder='name' onChange={getValues} value={customer} name='customer' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500' />
     </div>
     <div>
      <label htmlFor="phoneno">Phone Number</label>
      <input type="number" placeholder='phoneno' onChange={getValues} value={phoneno} name='phoneno' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500'/>
     </div>
     <div>
      <label htmlFor="num">How many Emis</label>
      <input type="number" placeholder='how many' onChange={getValues} value={num} name='num' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500'/>
     </div>
     <div>
      <label htmlFor="amount">Per Emi Amount</label>
      <input type="number" placeholder='amount' onChange={getValues} value={amount} name='amount' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500' />
     </div>
     <div  >
      <label htmlFor="customer">Product Amount</label>
      <input type="text" placeholder='name' onChange={getValues} value={ProductAmount} name='ProductAmount' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500' />
     </div>
     <div  >
      <label htmlFor="customer">Total Loan Amount</label>
      <input type="text" placeholder='name' onChange={getValues} value={TotalLoanAmount} name='TotalLoanAmount' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500' />
     </div>
     <div  >
      <label htmlFor="customer">Aadhar Number</label>
      <input type="text" placeholder='name' onChange={getValues} value={AadharNumber} name='AadharNumber' 
      className='text-xl rounded-lg p-1 outline-none focus:ring-2 focus:ring-cyan-500' />
     </div>
     <div>
      <label htmlFor="date">Date</label>
      <input type="date" onChange={getValues} name='date' value={date}/>
     </div>
     </form>
     <button onClick={sendData} className='bg-blue-400 p-3 mt-9 rounded-xl hover:bg-blue-500 hover:text-white' >Submit</button>
    
    </div>
  )
}

export default AddCustomerPage