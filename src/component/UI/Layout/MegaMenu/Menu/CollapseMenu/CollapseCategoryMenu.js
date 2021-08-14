import React from 'react'

import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCategoryMenu = (props) => {
    const { menuProps } = props;

    console.log("menuProps", menuProps)
    const hoverdHandler = (id) => {
        //   props.hoverdHandler(id, "SubMenu");
    };

    const SubMenuList = (props) => {
        console.log("props", props)
        return (
            <>
            </>
         
        //     <Col>
        //         {

        //             props.x.list.map((x) => {

        //                 return (
        //                     x.isHovered &&
        //                     <Div d="flex" flexDir="column">
        //                         {x.title}
        //                     </Div>

        //                 );
        //             })}
        //     </Col>
        )
    }
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
                                    onMouseEnter={() => hoverdHandler(x.id)}
                                >
                                    {x.title}
                                </Anchor>
                            </Link>
                        </Col>
                        <SubMenuList props={x} />
                    </Div>
                ))}
        </>
    );
    return <Div ><MenuList /> </Div>;
};

export default CollapseCategoryMenu