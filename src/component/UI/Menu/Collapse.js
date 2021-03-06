import React, { useState } from "react";
import { Div, Tag, Anchor, Icon, Button, Dropdown } from "atomize";
import { Link } from "react-router-dom";

const Collapse = (props) => {



  const onClickHandler = () => {
    props.onClick()
  }

  const onOpenHandler = () => {
    props.isOpen()
    
  }
  const hoverHandler = (id) => {
    props.hovered(id, "MainMenu")
  }

 
  let bgc = "black"
  props.active && (bgc = "black")

  let btc = "black"
  props.active && (btc = "white")

  return (
    <>
      <Button
        isOpen={onOpenHandler}
        onClick={onClickHandler}
        shadow="2"
        opacity="90%"
        w="15rem"
        rounded="0"
        m={{ b: "1rem" }}
        style={{
          backgroundColor: `${bgc}`,
          textColor: `${btc}`
        }}
        border="1px solid"
        borderColor="black"
        hoverBg="white"
        hoverBorderColor="#567da9"
        hoverShadow={{b: "black"}}
        onMouseEnter={() => hoverHandler(props.id)}
      >
        {props.title}
      </Button>
    </>
  );
};

export default Collapse;
