

import axios from 'axios';
import * as actionTypes from '../constants/productConstant.js';


const URL = 'http://localhost:8000';

export const getProducts = () => async(dispatch ) => {
    try{
                /*response ={
            config:{},
            data:[],
            headers:{},
            status: 200,
            message=""

        }
    {data} = response -- object destructuring*/

        const {data} = await axios.get(`${URL}/products`)

        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:  data })

    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload:  error.message});
        
    }

}
/*response ={
    config:{},
    data:[],
    headers:{},
    status: 200,
    message=""

}*/

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});

         const {data} = await axios.get(`${URL}/product/${id}`)

        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:  data })
    }catch(err){
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload :err.message})

    }
}