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

  const clickHandler = (id, index) => {
    console.log("id", id);

    dispatch({
      type: "TOGGLE-DROPDOWN",
      payload: { id, index },
    });
    dispatch({
      type: "SET-All-OTHERDROPDOWNS-TO-FALSE",
      payload: { id, index },
    });
    // dispatch({
    //   type: "ADJUST-POSITION-BASED-ON-INDEX",
    //   payload: { id, index },
    // });
  };

  return (
    <Container bg="white">
      <Row justify="center">
        {menu.options.map((menuItem, index) => {
            const open = menuItem.isOpen;
          return (
            <>
              <Collapse
                key={menuItem.id}
                title={menuItem.title}
                isOpen={menuItem.isOpen}
                onClick={() => clickHandler(menuItem.id, index)}
                active={open}
              />
            </>
          );
        })}
      </Row>

      {menu.options.map((menuItem, index) => {
        const open = menuItem.isOpen;
        return (
          <>
            {open && (
              <Row>
              

                 
                <CollapseMenu
                  options={menu.options}
                  isOpen={open}
                  key={menuItem.id}
                  dimensions={menuItem.dimensions}
                 
                />
                
              </Row>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Menu;
