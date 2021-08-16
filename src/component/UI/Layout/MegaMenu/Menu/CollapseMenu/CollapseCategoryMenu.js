import React from 'react'

import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCategoryMenu = (props) => {
    const { menuProps } = props;

    // console.log("menuProps", menuProps)
    const hoverdHandler = (id) => {
        props.hoverdHandler(id, "SubMenu");
    };

    const SubCategory = (props) => {
        const [...subCategory] = props.props.subCategory;
        const isHovered = props.props.subMenuIsHovered
        // const { isHovered } = props.props.subMenuIsHovered;
        // console.log("SubCategoryProps", subCategory)
        console.log("isHovered", props.props.subMenuIsHovered)
        
        return (
            <>
                {subCategory && subCategory.map(x => <>
                   
                          {isHovered && <li>  {x.title} </li>}
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
            const {...obj } = list 
            // console.log("testObj",  obj)
            // console.log("list2", list)
            // console.log("subMenuIsHovered", subMenuIsHovered)
        }
       
        // console.log("list", subMenuItems)
        // console.log("props", props)
        return (
            <>
                {   subMenuItems !== undefined  && 
                    subMenuItems.map((x) => {

                        return (

                            <Row>
                                <Col>
                                    <Link key={x.id} to={x.url}>
                                        <Anchor
                                            textColor="black"
                                            d="block"
                                            p={{ y: "0.25rem" }}
                                            onMouseEnter={() => hoverdHandler(x.id, "subMenu")}
                                        >
                                            {x.title}
                                        </Anchor>
                                        {/* <Div d="flex" flexDir="column">
                                            {x.title}
                                        </Div>
                                        <Div d="flex" flexDir="column">
                                            {x.title}
                                        </Div>
                                        <Div d="flex" flexDir="column">
                                            {x.title}
                                        </Div>
                                        <Div d="flex" flexDir="column">
                                            {x.title}
                                        </Div> */}
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