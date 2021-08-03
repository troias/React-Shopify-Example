import React, { useState } from "react";
import { Div, Tag, Anchor, Icon, Button, Dropdown } from "atomize";
import { Link } from "react-router-dom";
const Collapse = (props) => {


  const menuList = (
    <Div w="0rem" id="">
      {props.options.map((name, index) => (
        <Link key={name.id} to={name.url}>
          <Anchor d="block" p={{ y: "0.25rem" }} >
            {name.title}
          </Anchor>
        </Link>
      ))}
    </Div>
  );


  return (
    <>
      <Dropdown
        border="none"
        isOpen={props.isOpen}
        onMouseOver={props.hoverHandler}
        onClick={props.hoverHandler}
        menu={menuList}
        hoverShadow="4"
        shadow="2"
        hoverBg="#00FF7F"
        opacity="90%"
        className={props.className}
      >
        {props.title}
      </Dropdown>
    </>
  );
};

export default Collapse;
