import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-300 w-1/5 h-screen">
      <div className="flex flex-col justify-items-center items-center mt-8 gap-8">
        <h3 className='bg-blue-400 p-3 rounded-xl hover:bg-blue-500 hover:text-white' >
          <NavLink to="/">Dashboard</NavLink>
        </h3>
        <h3 className='bg-blue-400 p-3 rounded-xl hover:bg-blue-500 hover:text-white' >
        <NavLink to="/addCustomers">Add Customer</NavLink>
        </h3>
        <h3 className='bg-blue-400 p-3 rounded-xl hover:bg-blue-500 hover:text-white'>
        <NavLink to="/showCustomer">All Customers</NavLink>
        </h3>  
      </div>
    </div>
  );
};

export default Navbar;
