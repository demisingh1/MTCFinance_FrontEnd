import { createContext, useContext, useReducer } from "react";
import { customerReducer } from "../reducers/CustomerReducer";
const CustomerContext = createContext()

const initialState = {
    isLoading:false,
    AllCustomers:[],
    SingleCustomer:{}
}

export const CustomerProvider = ({children})=>{
   const[state , dispatch] = useReducer(reducer , initialState)
   const{isLoading, AllCustomers, SingleCustomer} = state

    return <CustomerContext.Provider value= {{isLoading, AllCustomers, SingleCustomer}} >
        {children}
    </CustomerContext.Provider>
}

export const useCustomerContext = ()=>{
    return useContext(CustomerContext)
}