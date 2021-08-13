import React, { useEffect, useState } from "react";
import { Container, Row, Div } from "atomize";
import Collapse from "../../../Menu/Collapse";
import { useSelector, useDispatch } from "react-redux";

import CollapseMenu from "./CollapseMenu/CollapseMenu";
import CollapseCollectionsMenu from "./CollapseMenu/CollapesCollectionsMenu";
import CollapseSalesMenu from "./CollapseMenu/CollapseSalesMenu";

const Menu = () => {
  const menu = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("state", menu);

  useEffect(() => []);

  const hoverdHandler = (id, type) => {
    dispatch({
      type: "ON-HOVER",
      payload: {
        type: type,
        id: id,
      },
    });
    dispatch({
      type: "SET-All-OTHERDROPDOWNS-TO-FALSE",
      payload: { id },
    });
    dispatch({
      type: "CHANGLE-MENU-LIST",
      payload: menu,
    });
    dispatch({
      type: "CHANGLE-MENU-COMP",
      payload: {
        id: id,
      },
    });
  };

  const clickHandler = (id, index) => {
    dispatch({
      type: "TOGGLE-DROPDOWN",
      payload: { id, index },
    });
    dispatch({
      type: "SET-All-OTHERDROPDOWNS-TO-FALSE",
      payload: { id, index },
    });
  };

  const SubMenuComponent = () => {

    let item = []
    console.log("item", item)
    switch (menu.currentMenuIndex) {
      case 0:
        item = menu.menuOptions.map((menuItem, index) => {
          const open = menuItem.isOpen;
          return (
            <>
              {open && (
                <CollapseMenu
                  options={menu.currentMenuList}
                  isOpen={open}
                  key={menuItem.id}
                  dimensions={menuItem.dimensions}
                  style={{
                    backgroundColor: "black",
                  }}
                  hovered={hoverdHandler}
                />
              )}
            </>
          );
        });
        console.log("item", item)
        return item;
        case 1:
        item = menu.menuOptions.map((menuItem, index) => {
          const open = menuItem.isOpen;
          return (
            <>
              {open && (
                <CollapseMenu
                  options={menu.currentMenuList}
                  isOpen={open}
                  key={menuItem.id}
                  dimensions={menuItem.dimensions}
                  style={{
                    backgroundColor: "black",
                  }}
                  hovered={hoverdHandler}
                />
              )}
            </>
          );
        });
        console.log("item", item)
        return item;
        case 2:
        item = menu.menuOptions.map((menuItem, index) => {
          const open = menuItem.isOpen;
          return (
            <>
              {open && (
                <CollapseMenu
                  options={menu.currentMenuList}
                  isOpen={open}
                  key={menuItem.id}
                  dimensions={menuItem.dimensions}
                  style={{
                    backgroundColor: "black",
                  }}
                  hovered={hoverdHandler}
                />
              )}
            </>
          );
        });
        console.log("item", item)
        return item;

      default:
        return item;
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
                hovered={hoverdHandler}
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
