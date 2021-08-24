import React from 'react'

import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCategoryMenu = (props) => {
    const { menuProps } = props;


    const hoverdHandler = (id, index) => {

        props.hoverdHandler(id, "SubMenu", index,);
    };

    const SubCategory = (props) => {


        console.log("x", props )
        console.log("subCategory", props.props.list )
        return (
            <div>
                {props.props.list.map(x => x.subMenuIsHovered === true && x.subCategory.map(x => <li>{x.title} </li>))}
           
            </div>
        )
    }

    const SubMenuList = (props) => {
        let subMenuItems = []


        if (props.props !== undefined) {
            const { list } = props.props;
            const { subMenuIsHovered } = props.props;
            subMenuItems = list


        }


        return (
            <>
                {subMenuItems !== undefined &&
                    subMenuItems.map((x, i) => {

                        return (

                            <>


                                <Link key={x.id} to={x.url}>
                                    <Anchor
                                        textColor="black"
                                        d="block"
                                        p={{ y: "0.25rem" }}
                                        onMouseEnter={() => hoverdHandler(x.id, i)}
                                    >
                                        {x.title}
                                    </Anchor>
                                </Link>




                            </>

                        )
                    })}


            </>
        )
    }

    const MenuList = (props) => {
        const [MainSublist] = props.props;

        return (
            <Row>




                <Col>

                    <SubMenuList props={MainSublist} />
                </Col>
                <Col>
                    <SubCategory props={MainSublist} />
                </Col>
            </Row>
        );
    }
    return <MenuList props={menuProps} />
};

export default CollapseCategoryMenu