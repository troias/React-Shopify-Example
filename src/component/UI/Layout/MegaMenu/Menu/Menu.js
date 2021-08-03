import React, { useEffect } from "react";
import { Container, Button, Row } from "atomize";
import Collapse from "../../../Menu/Collapse";
import { useSelector, useDispatch } from 'react-redux'
import MenuModal from '../MenuModal/MenuModal'





const Menu = () => {

    const menu = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(menu)
    useEffect(() =>


        [])

    const clickHandler = (id, index) => {
        console.log("id", id)
       
        dispatch({
            type: "TOGGLE-DROPDOWN",
            payload: {id, index},
        });
    };

    return (
        <Container bg="white">
            <Row justify="space-between" m="1px">

            {
               
               menu.options.map((menuItem, index) => {
                   return (
                    <Collapse
                    options={menu.options}
                    title={menuItem.title}
                    isOpen={menuItem.isOpen}
                    onClick={() => clickHandler(menuItem.id, index)}
                   
                />
                   )
               })
            }
               
                 <MenuModal>

                 </MenuModal>
            </Row>
        </Container>
    );
};

export default Menu;
