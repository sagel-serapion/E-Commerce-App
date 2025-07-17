
import * as actionType from "../constants/productConstant";



export const getProductsReducer= (state = {products:[]},action) => {

     // for diffferntiating
     switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products : action.payload}
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.apyload}
        default:
            return state
     }



}

export const getProductDetailsReducer = (state = {product : {}},action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {laoding:false,product:action.payload}
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return {product:{}}
        default:
            return state
    }

}