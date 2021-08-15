import React from 'react'

import { Div, Tag, Anchor, Icon, Button, Dropdown, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const CollapseCategoryMenu = (props) => {
    const { menuProps } = props;

    console.log("menuProps", menuProps)
    const hoverdHandler = (id) => {
        props.hoverdHandler(id, "SubMenu");
    };

    const SubCategory = (props) => {
        const [...subCategory] = props.props.subCategory;
        console.log("SubCategoryProps", subCategory)
        return (
            <>
                {subCategory.map(x => <>
                    <li>
                        {x.title}
                    </li> </>)}
            </>
        )
    }

    const SubMenuList = (props) => {
        // const { list } = props.props;

        console.log("list", props)
        // console.log("props", props)
        return (
            <>
                {
                    props.props.list.map((x) => {

                        return (

                            <Row>
                                <Col>
                                    <Link key={x.id} to={x.url}>
                                        <Anchor
                                            textColor="black"
                                            d="block"
                                            p={{ y: "0.25rem" }}
                                            onMouseEnter={() => hoverdHandler(x.id)}
                                        >
                                            {x.title}
                                        </Anchor>
                                        <Div d="flex" flexDir="column">
                                            {x.title}
                                        </Div>
                                    </Link>
                                </Col>

                                <Col>
                                    <SubCategory props={x} />
                                </Col>

                            </Row>

                        );
                    })}


            </>
        )
    }

    const MenuList = (props) => {
        const [MainSublist] = props.props;
        // console.log("listCate", list)
        console.log("cateProps", MainSublist)
        return (
            <>






                <SubMenuList props={MainSublist} />


            </>
        );
    }
    return <MenuList props={menuProps} />
};

export default CollapseCategoryMenu