import React, { useEffect } from "react";
import { Container, Button, Row } from "atomize";
import Collapse from "../../../Menu/Collapse";
import { useSelector, useDispatch } from 'react-redux'





const Menu = () => {
   
    const menu = useSelector(state => state.showDropdown) 
    const dispatch = useDispatch()

    useEffect(() =>
       
        console.log(menuState), [menuState])

    const hoverHandler = () => {
        dispatch({
            type: "SHOW-DROPDOWN",
        });
    };

    return (
        <Container bg="white">
            <Row justify="space-between" m="1px">
                <Button
                    w="15rem"
                    rounded="0"
                    m={{ b: "1rem" }}
                    bg="white"
                    textColor="black"
                    border="1px solid"
                    borderColor="black"
                    hoverBg="black"
                    hoverTextColor="white"
                    hoverBorderColor="#567da9"
                    hoverShadow="4"
                >
                    <Collapse
                        options={menu.options}
                        title={"Shop Categories"}
                        isOpen={menu.showDropdown}
                        hoverHandler={hoverHandler}
                    />
                </Button>
                <Button
                    hoverBg="black"
                    hoverTextColor="white"
                    hoverBorderColor="#567da9"
                    hoverShadow="4"
                    w="15rem"
                    rounded="0"
                    bg="white"
                    textColor="black"
                    border="1px solid"
                    borderColor="black"
                ></Button>
                <Button
                    hoverBg="black"
                    hoverTextColor="white"
                    hoverBorderColor="#567da9"
                    hoverShadow="4"
                    w="15rem"
                    rounded="0"
                    bg="white"
                    textColor="black"
                    border="1px solid"
                    borderColor="black"
                ></Button>
                <Button
                    hoverBg="black"
                    hoverTextColor="white"
                    hoverBorderColor="#567da9"
                    hoverShadow="4"
                    w="15rem"
                    rounded="0"
                    bg="white"
                    textColor="black"
                    border="1px solid"
                    borderColor="black"
                ></Button>
            </Row>
        </Container>
    );
};

export default Menu;
