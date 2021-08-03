import React, { useEffect, useReducer } from "react";
import { Container, Button, Row } from "atomize";
import Collapse from "../../../Menu/Collapse";

const defaultMenuState = {
    options: [
        { title: "Products", url: "/products", id: 1 },
        { title: "Collection", url: "/collection", id: 2 },
        { title: "Sales", url: "/sales", id: 3 },
    ],
    showDropdown: false,
};

const menuReducer = (state = defaultMenuState, action) => {
    switch (action.type) {
        case "SHOW-DROPDOWN":
            return {
                ...state,
                showDropdown: true, 
            }
        case "SET-INTIALSTATE":
            return {
                ...state
            }

        default:
            return state;
    }
};

const Menu = () => {
    const [menuState, dispatch] = useReducer(menuReducer, defaultMenuState);

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
                        options={menuState.options}
                        title={"Shop Categories"}
                        isOpen={menuState.showDropdown}
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
