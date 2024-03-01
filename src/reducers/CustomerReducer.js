import { GET_CUSTOMERS } from "../actions"

export const customerReducer = (state,action)=>{
    if(GET_CUSTOMERS === action.type){
        console.log('all customers');
    }
}