import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Reducer/CombineReducers'

const persistedState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')):{}

// const enhancer = applyMiddleware(thunk)

const store = createStore(
    
    RootReducer,
    persistedState,
    applyMiddleware(thunk)
)
export default store