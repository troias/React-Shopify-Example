import { createStore } from 'redux'

const defaultStore = {

    currentMenuList: [],
    shopByCategory: [
        {
            title: "Products",
            url: "/products",
            id: 1,
            isOpen: false,
            isHovered: false,
            subCategory: [
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 1
                },
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 2
                },
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 3
                }

            ]

        },
        {
            title: "Shoes",
            url: "/Shoes",
            id: 2,
            isOpen: false,
            isHovered: false,
            subCategory: [
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 1
                },
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 2
                },
                {
                    title: "Shoes",
                    url: "/shoes",
                    id: 3
                }

            ]

        }
    ],
    shopByBrands: [
        {
            title: "Addidas",
            url: "/brands/addidas",
            id: 1
        }
    ],

    shopByCollections: [
        {
            title: "Summer Collection",
            url: "/collections/addidas",
            id: 1
        }
    ],


    menuOptions: [

        {
            title: "Shop by Category",
            url: "/products",
            id: 1,
            isOpen: false,
            modalItem: false,
            isHovered: false,
            currentMenuItem: false,
            list: [{

                title: "Summer Collection",
                url: "/collections/addidas",
                id: 1
            }
            ]
        },
        {
            title: "Collections",
            url: "/collection",
            id: 2, 
            isOpen: false,
            modalItem: false,
            isHovered: false,
            currentMenuItem: false,
            list: [
                {
                    title: "Summer Collection",
                    url: "/collections/addidas",
                    id: 1
                }
            ]
        },
        {
            title: "Sales",
            url: "/sales",
            id: 3,
            isOpen: false,
            modalItem: false,
            isHovered: false,
            currentMenuItem: false,
            list: [
                {
                    title: "Summer Collection",
                    url: "/collections/addidas",
                    id: 1
                }
            ]
        },

    ],
    showDropdown: false,


}

const menuReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "TOGGLE-DROPDOWN":

            const copyOfOptions = [
                ...state.menuOptions,
            ]

            const res = copyOfOptions

            res.map(x => (x.id === action.payload.id)
                && (x.isOpen = !x.isOpen) &&
                (x.ModalItem = true))

            return {
                ...state,
                menuOptions: res
            }
        case "ON-HOVER":

            let stateCopy
            let stateObjCopy

            if (action.payload.type === "MainMenu") {
                stateCopy = [
                    ...state.menuOptions
                ]

                stateCopy.map(mainMenuCategory =>
                    (mainMenuCategory.id === action.payload.id) &&
                    (mainMenuCategory.isHovered = true,
                        mainMenuCategory.isOpen = true,
                        mainMenuCategory.currentMenuItem = true))

                stateObjCopy = {
                    ...state,
                    menuOptions: stateCopy
                }

                return stateObjCopy
            }
            if (action.payload.type === "SubMenu") {
                stateCopy = [
                    ...state.shopByCategory
                ]
                stateCopy.map(subCategory =>
                    (subCategory.id === action.payload.id) &&
                    (subCategory.isHovered = true))
                stateObjCopy = {
                    ...state,
                    shopByCategory: stateCopy
                }

                return stateObjCopy
            }

            return {
                ...state,
                shopByCategory: stateCopy
            }

        case "SET-INTIALSTATE":
            return {
                ...state
            }

        case "SET-All-OTHERDROPDOWNS-TO-FALSE":

            const copyOfDropDownOptions = [
                ...state.menuOptions,
            ]

            copyOfDropDownOptions.map(x => x.id !== action.payload.id
                && (x.isOpen = false) &&
                (x.isHovered = false))

            return {
                ...state,
                menuOptions: copyOfDropDownOptions
            }

            case "CHANGLE-MENU-LIST":

                const copyOfDropDownOptions6 = [
                    ...state.menuOptions,
                ]
             
               const filteredSubMenu = copyOfDropDownOptions6.filter(x => x.isOpen)
               let list = [...filteredSubMenu]

                return {
                    ...state,
                    currentMenuList: list
                }

        default:
            return state;
    }
};

const store = createStore(menuReducer)


export default store

