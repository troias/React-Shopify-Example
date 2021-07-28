import React, {useReducer} from 'react'
import ShopContext from './ShopContext';


const  defaultReducerState = {

}

const shopReducer = (state, action) => {
    switch (action.type) {
        case "value":
            
            break;
    
        default:
            ;
    }
}

export const ShopContextProvider = (props) => {
  
  
  
  const [shopState, dispatch] = useReducer(shopReducer, defaultReducerState)
  
  
  
    const context = {
        ...shopState
     }
  
    return (
        <ShopContextProvider context={context}>
         {props.children}
        </ShopContextProvider>
    )
}
