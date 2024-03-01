import axios from 'axios';
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const loader = async({params}) =>{
  try {
    const res = await axios.get(`/api/SingleCustomer/${params.id}`)
    let customerDetail = res.data.message[0]
    const loanRes = await axios.get(`/api/loan/${customerDetail._id}`)
    let loanData = loanRes.data.message
    return {customerDetail, loanData}
  } catch (error) {
    return error
  }
}

const SingleCustomerPage = () => {
    // const {id} = useParams()
 
 const{customerDetail,loanData} = useLoaderData()
 const{_id, name,loanno,AadharNumber,ProductAmount,TotalLoanAmount,paid} = customerDetail 
//  console.log(loanData);
 let loanDataSequence = loanData.sort((a , b) =>{
  return a.serial - b.serial
 })
//  console.log(loanDataSequence, "with Sequence");

// update Emi Method
const updateEmi = (id)=>{
 console.log(id); // update Emi Concept
}
  return (
    <div className='flex flex-col'>
    <div className='flex gap-3'>
        <h2>Customer Name:{name}</h2>
        <h2>Loan Number:{loanno}</h2>
        <h2>AAdhar Number:{AadharNumber}</h2>
        <h2>Product Amount:{ProductAmount}</h2>
        <h2>Total Loan Amount: {TotalLoanAmount}</h2>
        <h2>Statues:{paid === true ? 'Closed' : 'Active'}</h2>
    </div>
    <div>
      <h2>Number Of Emis {loanData.length}</h2>
      {loanDataSequence.map((emi)=>{
        return <div className='flex content-center gap-4 my-2' key={emi._id}>
        <h3>{emi.serial}</h3>
        <h3>{emi.amount}</h3>
        <h3>Loan Number:{emi.loanno}</h3>
        <h3>{emi.paid === 'true' ? 'paid' :'unpaid'}</h3>
        <h3>Date:{emi.date}</h3>
        <button className='bg-blue-400 px-2 py-1 rounded-lg' onClick={() =>updateEmi(emi._id)} >Update</button>
        </div>
        
      })}
    </div>
    </div>
  )
}

export default SingleCustomerPage