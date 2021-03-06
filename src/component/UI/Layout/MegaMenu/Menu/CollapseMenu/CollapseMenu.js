import React from 'react'
import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseMenu = (props) => {

  const hoverHandler = (id) => {
    props.hovered(id,  "SubMenu")
  }
  const subCategory = props.options.map(x => x.list.map(x => x.subCategory))
  const menuList = (


    <>
    
      { props.isOpen && props.options.map((x, index) => (

        <Div w="inherit" id="" bg="white" d="flex" >
          <Col bg="grey">
            <Link key={x.id} to={x.url} >
              <Anchor
              textColor="black"
               d="block" 
               p={{ y: "0.25rem" }} 
                onMouseEnter={() => hoverHandler(x.id )}  >
                {x.title}
              </Anchor>
            </Link>
          </Col>
          <Col >



            { x.isHovered && x.isOpen && x.list.map(x => {
              
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
