import { createStore } from 'redux'

const defaultStore = { counter: 0 }

const menuReducer = (menuState = defaultStore, action) => {
    switch (action.type) {
        case "a":
            return {
                ...menuState,
            }
               
        case "a":
            return {
                ...menuState,
            }
            
        case "DECREMENT":
            return {
                
            }
        default:  
        return defaultStore
    }
}

const store = createStore(counterReducer)


export default store
