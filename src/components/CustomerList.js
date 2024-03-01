import React from 'react'
import { Link } from 'react-router-dom'

const CustomerList = ({item}) => {
  return (
    <div>
        <Link to={`/${item._id}`}>{item.name}</Link>
        {/* <Link to={`/${item.loanno}`}>{item.loanno}</Link> */}
    </div>
  )
}

export default CustomerList