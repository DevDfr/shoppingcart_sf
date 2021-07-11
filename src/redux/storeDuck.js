import axios from 'axios'

/**
 * Duck - Redux para la tienda.
 */

const dataInicial = {
    products: []
}

const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS'

export default function storeReducer(state = dataInicial, action){
    switch(action.type){

        case GET_ALL_PRODUCTS_SUCCESS:
            return {...state, products: action.payload}

        default:
            return state

    }
}

/**
 * getAllProductsAction
 * Consume API de productos.
 */
export const getAllProductsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}