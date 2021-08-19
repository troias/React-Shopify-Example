import { createStore } from "redux";

const defaultStore = {
  currentMenuList: [],
  currentMenuItemIndex: 0,
  currSubMenu: [],
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
          isOpen: true,
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
    case "FIND-MENUITEM-INDEX":
      const copyOfOptions5 = [...state.menuOptions];

      let indexItemNum = copyOfOptions5.findIndex(
        (x) => x.id === action.payload.id
      );

      // console.log("currentMenuItemIndex", indexItemNum);
      // console.log("currentMenuItemID", action.payload.id);
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
          (x.isOpen = !x.isOpen)
      );
      // console.log("res", res)
      return {
        ...state,
        menuOptions: res,
      };
    case "ON-HOVER":
      let stateCopy;

      console.log("hoverType", action.payload)
      console.log("currentMenuList", state.currentMenuList)
          console.log("OnHoverActionType" , action.payload.type)
      console.log("OnHoveractionID" , action.payload.id)
      console.log("OnHoverMenuOptionsIndex", action.payload.index)
      //if index == index open it

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
          console.log("mainMenu", stateCopy)
          return stateObjCopy;

        case "SubMenu":
          // stateCopy = [...state.menuOptions];
          let listCopy = [...state.currentMenuList]

          // stateCopy.map(
          //   (x, index) =>
          //     index === action.payload.index &&
          //      (x.isHovered = true)
          // );

          // const listCopy = stateCopy.filter((x) => x.id === action.payload.id );

          const [{ ...obj }] = listCopy;
          // // listCopy.map(x => x.id === action.payload.id )
          const newObj = obj.list.map((x, i) => i === action.payload.index && (x.subMenuIsHovered = true))
          // const newObj = obj
          // console.log("index", action)
          // console.log("listCopy", listCopy);
          // console.log("testObj", newObj);
          // console.log("obj", newObj)
          // console.log("payloadIndex", action.payload.index)
          // console.log("newArr", newArr)
          // console.log("SubMenuState", listCopy);
          const subMenuObjCopy = {
            ...state,
            currSubMenu: newObj,
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
      const copyOfDropDownOptions = [...state.menuOptions];
      console.log("cURRMENUITEMS",  copyOfDropDownOptions)
      console.log("actionType" , action.payload.type)
      // console.log("actionID" , action.payload.id)
      console.log("MenuOptionsIndex", action.payload.index)


      if (action.payload.type === "MainMenu") {
        copyOfDropDownOptions.map(
          (x, i) =>
          i !== action.payload.index && (x.isOpen = false)
        );
      //   copyOfDropDownOptions.map(
      //     (x, i) =>
      //       i === action.payload.index &&
      //       (x.isOpen = true) &&
      //       (x.isHovered = true)
      //   );
      }
      if (action.payload.type === "SubMenu") {

        // const newArr = copyOfDropDownOptions.filter(x => x.id === action.payload.id)
        // console.log("SET-All-OTHERDROPDOWNS-TO-FALSE" , copyOfDropDownOptions)
        // const [{...obj}] = newArr 
        // const arrO =  obj.list.map((x, i) => i !== action.payload.index && 
        // (x.subMenuIsHovered = false))
        // console.log("SubMenu")
        // console.log("OBJ", arrO )

      }
      console.log("menuArr", copyOfDropDownOptions)
      return {
        ...state,
        menuOptions: copyOfDropDownOptions
      }


    case "CHANGLE-MENU-LIST":
      // console.log("MenuUtemInde", action.payload)
      const copyOfDropDownOptions6 = [...state.menuOptions];
      // console.log("CHANGLE-MENU-LIST", copyOfDropDownOptions6)
      const filteredSubMenu = copyOfDropDownOptions6.filter((x, i) =>


        x.isOpen

      )

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
