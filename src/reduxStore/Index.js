import { createStore } from 'redux'

const defaultStore = {
    options: [
        { title: "Products", url: "/products", id: 1, isOpen: false },
        { title: "Collections", url: "/collection", id: 2, isOpen: false },
        { title: "Sales", url: "/sales", id: 3, isOpen: false },
        { title: "Shop Categories", url: "/categories", id: 4, isOpen: false },
    ],
    showDropdown: false,


}


const menuReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "TOGGLE-DROPDOWN":
            
            const copyOfOptions = [
                ...state.options,
            ]


            const res = copyOfOptions
        
            res.map(x => x.id === action.payload.id && (x.isOpen = !x.isOpen))
          
    
            return {
                ...state, 
                options: res 
            }
        case "ON-HOVER":
            return {
                ...state,
                showDropdown: true,
            }
        case "SET-INTIALSTATE":
            return {
                ...state
            }

        default:
            return state;
    }
};

const store = createStore(menuReducer)


export default store

