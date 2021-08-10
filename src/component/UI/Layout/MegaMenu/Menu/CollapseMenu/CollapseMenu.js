import React from 'react'
import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseMenu = (props) => {

  const hoverHandler = (id) => {
    props.hovered(id,  "SubMenu")
  }
  const menuList = (


    <>

      {props.options.map((name, index) => (

        <Div w="inherit" id="" bg="white" d="flex" >
          <Col bg="grey">
            <Link key={name.id} to={name.url} >
              <Anchor
               d="block" 
               p={{ y: "0.25rem" }} 
                onMouseEnter={() => hoverHandler(name.id )}  >
                {name.title}
              </Anchor>
            </Link>
          </Col>
          <Col >



            {name.isHovered && name.subCategory.map(x => {
              
              return (
                <Div d="flex" flexDir="column" >
                  {x.title}
                 
                </Div>
              )
            }) }

           



          </Col>

        </Div>


      ))}

    </>

  );

  console.log("props", props)
  return (

    <Div
      bg="black"
      // list={menuList}
      isOpen={props.isOpen}

    >
      {menuList}

    </Div>

  )
}

export default CollapseMenu
