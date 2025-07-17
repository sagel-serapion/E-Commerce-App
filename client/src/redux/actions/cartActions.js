import axios from 'axios';

import * as actionTypes from '../constants/carConstant';
const URL = 'http://localhost:8000';

export const addToCart =(id,quantity)=> async(dispatch)=>{
    try{

        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({type :actionTypes.ADD_TO_CART,payload : {...data,quantity}}) // Check if product exists,
       
    }catch(error){
       dispatch({type :actionTypes.ADD_TO_CART_ERROR,payload :error.message}) // If product does not exist, dispatch error;
    }

}


export const removeFromCart =(id)=> async(dispatch)=>{
    
        dispatch({type :actionTypes.REMOVE_FROM_CART,payload : id});
  

}