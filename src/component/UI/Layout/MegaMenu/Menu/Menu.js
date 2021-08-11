import React, { useEffect } from "react";
import { Container, Row, Div } from "atomize";
import Collapse from "../../../Menu/Collapse";
import { useSelector, useDispatch } from "react-redux";

import CollapseMenu from "./CollapseMenu/CollapseMenu";

const Menu = () => {

  const menu = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("state", menu);

  useEffect(() => []);

  const optionsHandler = () => {
    return menu.shopByCategory
  }

  const hoverdHandler = (id, type) => { 
   
    dispatch({
      type: "ON-HOVER",
      payload: {
        type: type,
        id: id},
    });
    dispatch({
      type: "SET-All-OTHERDROPDOWNS-TO-FALSE",
      payload: { id  },
    });
    dispatch({
      type: "CHANGLE-MENU-LIST",
      payload: menu,
    });
  }

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

      {menu.menuOptions.map((menuItem, index) => {
        const open = menuItem.isOpen;
        return (
          <>
            {open && (
            
              

                 
                <CollapseMenu
                  options={ menu.currentMenuList}
                  isOpen={open}
                  key={menuItem.id}
                  dimensions={menuItem.dimensions}
                  style={{
                    backgroundColor: "black"
                  }}
                  hovered={hoverdHandler}
                />
                
            
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Menu;
