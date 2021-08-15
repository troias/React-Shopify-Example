import React from 'react'
import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseSalesMenu = (props) => {

  const { menuProps } = props;

  
  const hoverHandler = (id) => {
    props.hoverdHandler(id, "SubMenu");
  };

  const SalesMenuList = () => (
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
                  onMouseEnter={() => hoverHandler(x.id)}
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
  return <Div > <SalesMenuList/> </Div>;
};


export default CollapseSalesMenu
