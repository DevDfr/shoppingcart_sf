/**
 * Duck - Redux para el carro.
 */

const dataInicial = {
    productsCart: [],
    openCart: false
}

const SET_PRODUCT_TO_CART_SUCCESS = 'SET_PRODUCT_TO_CART_SUCCESS'
const RM_PRODUCT_CART_SUCCESS = 'RM_PRODUCT_CART_SUCCESS'
const SET_OPEN_CART_SUCCESS = 'SET_OPEN_CART_SUCCESS'

export default function cartReducer(state = dataInicial, action){
    switch(action.type){

        case SET_PRODUCT_TO_CART_SUCCESS:

            const prodsCart = state.productsCart.filter(x => x.id !== action.payload.id)

            return {...state, productsCart: [...prodsCart, action.payload ]}

        case RM_PRODUCT_CART_SUCCESS:

            const newProds = state.productsCart.filter(x => x.id !== action.payload.id)

            return {...state, productsCart: newProds}

        case SET_OPEN_CART_SUCCESS:
            return {...state, openCart: action.payload}

        default:
            return state

    }
}

/**
 * setProductToCartAction
 * Ingresa un producto al carro.
 * @param {object} product 
 */
export const setProductToCartAction = (product) => async (dispatch, getState) => {
    dispatch({
        type: SET_PRODUCT_TO_CART_SUCCESS,
        payload: product
    })
}

/**
 * removeProductCartAction
 * Elimina un producto del carro.
 * @param {object} product 
 */
export const removeProductCartAction = (product) => async (dispatch, getState) => {
    dispatch({
        type: RM_PRODUCT_CART_SUCCESS,
        payload: product
    })
}

/**
 * setOpenCartAction
 * Manejador para abrir o cerrar modal de carro.
 * @param {boolean} val 
 */
export const setOpenCartAction = (val) => async (dispatch, getState) => {
    dispatch({
        type: SET_OPEN_CART_SUCCESS,
        payload: val
    })
}