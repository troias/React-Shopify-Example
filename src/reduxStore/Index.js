import { createStore } from 'redux'

const defaultStore = {
    options: [
        {
            title: "Products", url: "/products",
            id: 1, isOpen: false,
            modalItem: false,
            dimensions: {
                width: "100px", height: "100px"
            }
        },
        {
            title: "Collections",
            url: "/collection",
            id: 2, isOpen: false,
            modalItem: false,
        },
        { title: "Sales", url: "/sales", id: 3, isOpen: false, modalItem: false },
        { title: "Shop Categories", url: "/categories", id: 4, isOpen: false, modalItem: false },
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

            res.map(x => ( x.id === action.payload.id )
                && (x.isOpen = !x.isOpen) &&
                (x.ModalItem = true))


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

        case "SET-All-OTHERDROPDOWNS-TO-FALSE":

            const copyOfDropDownOptions = [
                ...state.options,
            ]

            copyOfDropDownOptions.map(x => x.id !== action.payload.id
                && (x.isOpen = false) &&
                (x.ModalItem = false))

            return {
                ...state,
                options: copyOfDropDownOptions
            }

        // case "ADJUST-POSITION-BASED-ON-INDEX":

        //     const copyOfDropDownOptions2 = [
        //         ...state.options,
        //     ]

        //     copyOfDropDownOptions2.map((x) => {
        //         switch(action.payload.id) {
        //             case 1:
        //                 x.dimensions = { width: "1px" }
        //                 break
        //             case 2:
        //                 x.dimensions = { width: "2px" }
        //                 break
        //               case 3:
        //                 x.dimensions = { width: "3px" }
        //                 break
        //               case 4:
        //                 x.dimensions = { width: "4px" }
        //                 break
        //             default:
        //                 x.dimensions = { width: "1px" }
        //         }
        //     }
           

        //     )
                
        //     return {
        //         ...state,
        //         options: copyOfDropDownOptions2
        //     }

        //     case "ADJUST-POSITION-BASED-ON-INDEX":

        //         const copyOfDropDownOptions2 = [
        //             ...state.options,
        //         ]
    
        //         copyOfDropDownOptions2.map((x) => {
        //             switch(action.payload.id) {
        //                 case 1:
        //                     x.dimensions = { width: "1px" }
        //                     break
        //                 case 2:
        //                     x.dimensions = { width: "2px" }
        //                     break
        //                   case 3:
        //                     x.dimensions = { width: "3px" }
        //                     break
        //                   case 4:
        //                     x.dimensions = { width: "4px" }
        //                     break
        //                 default:
        //                     x.dimensions = { width: "1px" }
        //             }
        //         }
               
    
        //         )
                    
        //         return {
        //             ...state,
        //             options: copyOfDropDownOptions2
        //         }


        default:
            return state;
    }
};

const store = createStore(menuReducer)


export default store

