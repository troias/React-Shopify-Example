import React from "react";
import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCollectionsMenu = (props) => {
  const { menuProps } = props;

  console.log("menuProps", menuProps)
  console.log("subMenuHoverState", menuProps)

  const hoverdHandler = (id) => {
    props.hoverdHandler(id, "SubMenu");
  };

  const MenuList = () => (
    <>
      { 
        menuProps.map((x, index) => (
          x.isOpen &&
          <Div w="inherit" id="" bg="white" d="flex">
        
            <Col bg="grey">
              <Link key={x.id} to={x.url}>
                <Anchor
                  textColor="black"
                  d="block"
                  p={{ y: "0.25rem" }}
                  onMouseEnter={() =>  hoverdHandler(x.id)}
                >
                  {x.title}
                </Anchor>
              </Link>
            </Col>
            <Col>
              {x.isHovered &&
                x.isOpen &&
                x.list.map((x) => {
                  return (
                    <Div d="flex" flexDir="column">
                      {x.title}
                    </Div>
                  );
                })}
            </Col>
          </Div>
        ))}
    </>
  );
  return <Div ><MenuList/> </Div>;
};

export default CollapseCollectionsMenu;
