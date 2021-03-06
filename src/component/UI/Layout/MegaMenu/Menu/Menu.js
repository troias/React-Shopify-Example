import React, { useEffect, useState } from "react";
import { Container, Row, Div } from "atomize";
import Collapse from "../../../Menu/Collapse";
import { useSelector, useDispatch } from "react-redux";

import CollapseMenu from "./CollapseMenu/CollapseMenu";
import CollapseCollectionsMenu from "./CollapseMenu/CollapesCollectionsMenu";
import CollapseSalesMenu from "./CollapseMenu/CollapseSalesMenu";
import CollapseCategoryMenu from "./CollapseMenu/CollapseCategoryMenu";

const Menu = () => {
  const menu = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("state", menu);

  useEffect(() => []);

  const hoverdHandler = (id, type, index,  ) => { 
 
    dispatch({
      type: "ON-HOVER",
      payload: {
         index,
         type,
         id,
        
      },
    });
    dispatch({
      type: "SET-All-OTHER-MENUITEMS-TO-FALSE",
      payload: { id , type, index},
    });
  
    dispatch({
      type: "CHANGLE-MENU-LIST",
      payload: {
        type
       }
    });
    // dispatch({
    //   type: "FIND-MENUITEM-INDEX",
    //   payload: {
    //     id,
    //      index
    //   },
    // });
  };

  const clickHandler = (id, index) => {
    dispatch({
      type: "TOGGLE-DROPDOWN",
      payload: { id, index },
    });
    // dispatch({
    //   type: "SET-All-OTHERDROPDOWNS-TO-FALSE",
    //   payload: { id, index },
    // });
  };

  const SubMenuComponent = () => {
    let menuList = menu.currentMenuList;
    let currentComp = [];
 
    switch (menu.currentMenuItemIndex) {
      case 0:
        currentComp = <CollapseCategoryMenu
          menuProps={menuList}
          hoverdHandler={hoverdHandler}
        />;

        return currentComp;
      case 1:
        currentComp = (
          <CollapseCollectionsMenu
            menuProps={menuList}
            hoverdHandler={hoverdHandler}
          />
        );

        return currentComp;
      case 2:
        currentComp = (
          <CollapseSalesMenu
            menuProps={menuList}
            hoverdHandler={hoverdHandler}
          />
        );
        return currentComp;

      default:
        return currentComp;
    }
  };

  return (
    <Container bg="white">
      <Row justify="center">
        {menu.menuOptions.map((menuItem, index) => {
          const open = menuItem.isOpen;
          return (
            <>
              <Collapse
                key={menuItem.id}
                title={menuItem.title}
                // isOpen={menuItem.isOpen}
                onClick={() => clickHandler(menuItem.id, index)}
                active={open}
                id={menuItem.id}
                hovered={() => hoverdHandler(menuItem.id, "MainMenu", index)}
              />
            </>
          );
        })}
      </Row>
      <SubMenuComponent />
    </Container>
  );
};

export default Menu;
