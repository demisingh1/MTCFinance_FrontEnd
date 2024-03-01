import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CustomerList from '../components/CustomerList'

export const loader = async({})=>{
  try {
    const res = await axios.get(`/api/customer`)
    console.log(res);
    return res
  } catch (error) {
    console.log(error);
    return error
  }
}
const ShowCustomersPage = () => {
  const{data} =useLoaderData()
  console.log(data,"data");
  return (
    <div>
      {data.map((item)=>{
        return <CustomerList key={item._id} item = {item} />
      })}
    </div>
  )
}

export default ShowCustomersPage