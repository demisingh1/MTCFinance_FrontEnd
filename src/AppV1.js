// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import moment from 'moment';
import All_customers from './pages/All_customers';

function App() {
  const[data, setData] = useState({})
const[values, setValue] = useState({customer:'', phoneno:'', amount:'', num:'', date:''})
const{customer, phoneno, amount, num, date} = values

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
console.log(value, name);
setValue({...values, [name]:value})
}

const sendData = async ()=>{
  
  for(let i = 0; i<=num-1; i++){
    emis.push({amount:amount * 1, date:moment(date).add(i, 'months').format('YYYY-MM-DD') });
  }
  setData({customer, phoneno, emis});
  // axios intigration
  const res =await axios.post(`http://localhost:8000/api/customer`,{
    customer, phoneno, emis
  })
  console.log(res);
}
console.log(data);
  return (
    <>
    <div className="App">
     <form action="">
      <input type="text" placeholder='name' onChange={getValues} value={customer} name='customer' />
      <input type="number" placeholder='phoneno' onChange={getValues} value={phoneno} name='phoneno' />
      <input type="number" placeholder='how many' onChange={getValues} value={num} name='num'/>
      <input type="number" placeholder='amount' onChange={getValues} value={amount} name='amount'/>
      <input type="date" onChange={getValues} name='date' value={date}/>
     </form>
     <button onClick={sendData} >Submit</button>
    </div>
    <All_customers />
    </>
  );
}

export default App;
