import { createStore } from "redux";

const defaultStore = {
  currentMenuList: [],
  currentMenuItemIndex: 0,

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
      subMenuIsHovered: false,
      currentMenuItem: false,
      list: [
        {
          title: "Collections",
          url: "/collections/addidas",
          id: 1,
          isHovered: false,
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
      ],
    },
    {
      title: "Sales",
      url: "/sales",
      id: 3,
      isOpen: false,
      modalItem: false,
      isHovered: false,
      subMenuIsHovered: false,
      currentMenuItem: false,
      list: [
        {
          title: "Sales",
          url: "/collections/addidas",
          id: 1,
          isHovered: false,
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
      ],
    },
  ],
  showDropdown: false,
};

const menuReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "CHANGLE-MENU-COMP":
      const copyOfOptions5 = [...state.menuOptions];

      let indexItemNum = copyOfOptions5.findIndex(
        (x) => x.id === action.payload.id
      );

      console.log("currentMenuItemIndex", indexItemNum);
      // console.log("currentMenuItemIndex",state.currentMenuItemIndex)

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
          (x.isOpen = !x.isOpen) &&
          (x.ModalItem = true)
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
            (mainMenuItem) =>
              mainMenuItem.id === action.payload.id &&
              ((mainMenuItem.isHovered = true),
              (mainMenuItem.isOpen = true),
              (mainMenuItem.currentMenuItem = true))
          );

          const stateObjCopy = {
            ...state,
            menuOptions: stateCopy,
          };

          return stateObjCopy;

        case "SubMenu":
          stateCopy = [...state.menuOptions];
         
          // const listCopy = [...state.menuOptions.list];
          // console.log("listCopy", listCopy)
          // listCopy.map(
          //   (subCategoryMenuItem) =>
          //     subCategoryMenuItem.id === action.payload.id &&
          //     (subCategoryMenuItem.subMenuIsHovered = true)
          // );
          stateCopy.map((subCategoryMenuItem) =>  subCategoryMenuItem.id === action.payload.id)
          // stateCopy.list.map(
          //   (subCategoryMenuItem) =>
          //     subCategoryMenuItem.id === action.payload.id && 
          //     (subCategoryMenuItem.subMenuIsHovered === true))
          const listCopy = stateCopy.filter(x => x.id === action.payload.id 
           )
          let testObj = listCopy.map(x => x.id === action.payload.id && {...x.list})
            testObj = [{...testObj}]
          // testObj.map(x => x x => x.id === action.payload.id )

          let newArr = []
          for (const x  in testObj) {
          
            newArr.push({x})
          }
          // listCopy.map(x => () => x.listCopy.map(x.subMenuIsHovered === true))
          //  listCopy.map(x =>  
          //   x.list.map(x => x.id === action.payload.id && (x.subMenuIsHovered === true)))
          console.log("listCopy", listCopy)
          console.log("testObj", testObj)
          console.log("newArr", newArr)
          console.log("SubMenu", stateCopy)
          const subMenuObjCopy = {
            ...state,
            menuOptions: stateCopy
            
          };

          return subMenuObjCopy;
        default:
          return stateCopy;
      }

    case "SET-INTIALSTATE":
      return {
        ...state,
      };

    case "SET-All-OTHERDROPDOWNS-TO-FALSE":
      const copyOfDropDownOptions = [...state.menuOptions];

      copyOfDropDownOptions.map(
        (x) =>
          x.id !== action.payload.id &&
          (x.isOpen = false) &&
          (x.isHovered = false)
      );

      return {
        ...state,
        menuOptions: copyOfDropDownOptions,
      };

    case "CHANGLE-MENU-LIST":
      const copyOfDropDownOptions6 = [...state.menuOptions];

      const filteredSubMenu = copyOfDropDownOptions6.filter((x) => x.isOpen);
      let list = [...filteredSubMenu];

      return {
        ...state,
        currentMenuList: list,
      };

    default:
      return state;
  }
};

const store = createStore(menuReducer);

export default store;
