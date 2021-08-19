import React from 'react'

import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCategoryMenu = (props) => {
    const { menuProps } = props;

    // console.log("menuProps", menuProps)
    const hoverdHandler = (id, index) => {
        // console.log("hoverdHandlerID", id)
        // console.log("hoverdHandlerIndex", index)
        props.hoverdHandler( id, "SubMenu", index, );
    };

    const SubCategory = (props) => {
       
        const [...subCategory] = props.props.subCategory;
        const isHovered = props.props.subMenuIsHovered
        const isOpen = props.props.isOpen
        // const { isHovered } = props.props.subMenuIsHovered;
        // console.log("SubCategoryIsOpen", isOpen)
        // console.log("isHovered", props.props.subMenuIsHovered)
        
        return (
            <>
                {subCategory && subCategory.map(x => <>
                   
                          {isOpen && isHovered && <li>  {x.title} </li>}
                     </>)}
            </>
        )
    }

    const SubMenuList = (props) => {
        let subMenuItems = []
       

        if ( props.props !== undefined ) {
            const { list } = props.props;
            const { subMenuIsHovered } = props.props;
            subMenuItems = list
            
            // console.log("testObj",  obj)
            // console.log("list2", list)
            // console.log("subMenuItems", subMenuItems)
        }
       
        // console.log("list", subMenuItems)
        // console.log("props", props)
        return (
            <>
                {   subMenuItems !== undefined  && 
                    subMenuItems.map((x, i) => {

                        return (

                            <Row>
                                {/* {console.log("id", x.id)} */}
                                <Col>
                                    <Link key={x.id} to={x.url}>
                                        <Anchor
                                            textColor="black"
                                            d="block"
                                            p={{ y: "0.25rem" }}
                                            onMouseEnter={() => hoverdHandler(x.id, i )}
                                        >
                                            {x.title}
                                        </Anchor>
                                    </Link>
                                </Col>

                                <Col>
                                   { <SubCategory props={x}  /> }
                                </Col>

                            </Row>

                        ) 
                    })}
                   

            </>
        )
    }

    const MenuList = (props) => {
        const [MainSublist] = props.props;
        // console.log("listCate", list)
        // console.log("cateProps", MainSublist)
        return (
            <>






                <SubMenuList props={MainSublist} />


            </>
        );
    }
    return <MenuList props={menuProps} />
};

export default CollapseCategoryMenu