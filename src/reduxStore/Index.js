import { createStore } from "redux";

const defaultStore = {
  currentMenuList: [],
  currentMenuItemIndex: 0,
  currSubMenu: [{}],
  menuStyle: [
    {
      stucture: [],
    },
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
      list: [
        {
          title: "Category",
          url: "/collections/addidas",
          id: 1,
          isOpen: false,
          subMenuIsHovered: false,
          subCategory: [
            {
              title: "Shoes",
              url: "/shoes",
              id: 1,
            },
            {
              title: "Shoes",
              url: "/shoes",
              id: 2,
            },
            {
              title: "Shoes",
              url: "/shoes",
              id: 3,
            },
          ],
        },
        {
          title: "Category2",
          url: "/collections/addidas",
          id: 2,
          isOpen: false,
          subMenuIsHovered: false,
          subCategory: [
            {
              title: "Test",
              url: "/shoes",
              id: 1,
            },
            {
              title: "Test",
              url: "/shoes",
              id: 2,
            },
            {
              title: "Test",
              url: "/shoes",
              id: 3,
            },
          ],
        },
      ],
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
          title: "Collections",
          url: "/collections/addidas",
          id: 1,
          isHovered: false,
          subMenuIsHovered: false,
          subCategory: [
            {
              title: "Collection 1",
              url: "/shoes",
              id: 1,
            },
            {
              title: "Collection 2",
              url: "/shoes",
              id: 2,
            },
            {
              title: "Shoes",
              url: "/shoes",
              id: 3,
            },
          ],
        },
      ],
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
          title: "Sales",
          url: "/collections/addidas",
          id: 1,
          isHovered: false,
          subMenuIsHovered: false,
          subCategory: [
            {
              title: "Sales 1",
              url: "/shoes",
              id: 1,
            },
            {
              title: "Sales 2",
              url: "/shoes",
              id: 2,
            },
            {
              title: "Sales 3",
              url: "/shoes",
              id: 3,
            },
          ],
        },
      ],
    },
  ],
  showDropdown: false,
};

const menuReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "FIND-MENUITEM-INDEX":
      const copyOfOptions5 = [...state.menuOptions];

      let indexItemNum = copyOfOptions5.findIndex(
        (x) => x.id === action.payload.id
      );

 

      return {
        ...state,
        currentMenuItemIndex: indexItemNum,
      };
    case "TOGGLE-DROPDOWN":
      const copyOfOptions = [...state.menuOptions];

      const res = copyOfOptions;

      res.map(
        (x) =>
          x.id === action.payload.id &&
          (x.isOpen = !x.isOpen)
      );
    
      return {
        ...state,
        menuOptions: res,
      };
    case "ON-HOVER":
      let stateCopy;

      switch (action.payload.type) {
        case "MainMenu":
          stateCopy = [...state.menuOptions];

          stateCopy.map(
            (x, index) =>
              index === action.payload.index &&
              ((x.isHovered = true),
                (x.isOpen = true),
                (x.currentMenuItem = true))
          );

          const stateObjCopy = {
            ...state,

            menuOptions: stateCopy,
          };
       
          return stateObjCopy;

        case "SubMenu":
          // stateCopy = [...state.menuOptions];
          const listCopy = [...state.currentMenuList]


          listCopy[0].list.map((x, i) => i === action.payload.index && (x.isOpen = true) && (x.subMenuIsHovered = true))


       

          const subMenuObjCopy = {
            ...state,
            currentMenuList: listCopy,
            currSubMenu: listCopy
          };

          return subMenuObjCopy;

        default:
          return stateCopy;
      }

    case "SET-INTIALSTATE":
      return {
        ...state,
      };

    case "SET-All-OTHER-MENUITEMS-TO-FALSE":

      let stateCopy1
      switch (action.payload.type) {

        case "MainMenu":
          const copyOfDropDownOptions = [...state.menuOptions];
          copyOfDropDownOptions.map(
            (x, i) =>
              i !== action.payload.index && (x.isOpen = false)
          );


          const stateCopy1 = {
            ...state,
            currentMenuList: copyOfDropDownOptions,

          };
          return stateCopy1;

        case "SubMenu":

          const copyOfDropDownSubMenuOptions = [...state.currentMenuList];
          copyOfDropDownSubMenuOptions[0].list.map(
            (x, i) =>
              i !== action.payload.index && (x.subMenuIsHovered = false) && (x.isOpen = false)

          )
          const subMenuObjCopy = {
            ...state,
            currentMenuList: copyOfDropDownSubMenuOptions,
            // currSubMenu: copyOfDropDownSubMenuOptions
          };

          return subMenuObjCopy



        default: return stateCopy1
      }



    case "CHANGLE-MENU-LIST":

      
      let list 
           const copyOfDropDownOptions6 = [...state.menuOptions];
      if (action.payload.type === "MainMenu") {
   
    

        const filteredSubMenu = copyOfDropDownOptions6.filter((x, i) =>


          x.isOpen

        )

        let list = [...filteredSubMenu];
       

        const menuObj = {
          ...state, 
             currentMenuList: list,
      }

      return menuObj
    } else
      

      return {
        ...state,
        // currentMenuList: list,
      };

    default:
      return state;
  }
};

const store = createStore(menuReducer);

export default store;
