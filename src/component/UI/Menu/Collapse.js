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
      
        isOpen={props.isOpen}
       
        onClick={props.onClick}
        menu={menuList}


        shadow="2"
       
        opacity="90%"
        
        w="15rem"
        rounded="0"
        m={{ b: "1rem" }}
        bg="white"
        textColor="black"
        border="1px solid"
        borderColor="black"
        hoverBg="black"
        hoverTextColor="white"
        hoverBorderColor="#567da9"
        hoverShadow="4"
      >
        {props.title}
      </Dropdown>
    </>
  );
};

export default Collapse;
