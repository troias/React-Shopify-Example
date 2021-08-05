import React from 'react'
import { Div, Tag, Anchor, Icon, Button, Dropdown, Row } from "atomize";
import { Link } from "react-router-dom";

 const CollapseMenu = (props) => {

    const menuList = (
   

       
        <Div  id="" >
          {props.options.map((name, index) => (
            <Link key={name.id} to={name.url} >
              <Anchor d="block" p={{ y: "0.25rem" }}   >
                {name.title}
              </Anchor>
            </Link>
          ))}
      
        </Div>
       
      );

      console.log("props", props)
    return (
       
        <Dropdown 
        bg="white" 
        list={menuList} 
        isOpen={props.isOpen}
        
         />
              
        
    )
}

export default CollapseMenu
