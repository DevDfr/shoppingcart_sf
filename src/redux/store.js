import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import storeReducer from './storeDuck'
import cartReducer from './cartDuck'

/**
 * Configuracion basica del Store de Redux.
 */

const rootReducer = combineReducers({
    tienda: storeReducer,
    carro: cartReducer
})

const composeEnhancers = compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}