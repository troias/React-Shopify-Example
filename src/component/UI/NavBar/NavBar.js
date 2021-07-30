import React, { useContext } from "react";
import { Container, Anchor, Div, Input } from "atomize";
import { Link } from "react-router-dom";
import ShopContext from "../../../context/ShopContext";
import Logo from "../../UI/NavBar/Logo";
import { FaShoppingCart } from "react-icons/fa";
import Collapse from "../../UI/Menu/Collapse";
import classes from "./NavBar.module.css"
import ThemeContext from '../../../context/ThemeContext'
// import {ReactComponent as ReactLogo} from '../../../Assets/Images/Logo/Logo.svg';

const NavBar = () => {
    const { openCart } = useContext(ShopContext);
    const {toggleTheme, darkMode, test, tester } = useContext(ThemeContext)

    

    const options = [
        { title: "Products", url: "/products", id: 1 },
        { title: "Collection", url: "/collection" , id: 2},
        { title: "Sales", url: "/sales", id: 3 }]
 
    const options1 = [
        { title: "Products", url: "/products", id: 1 },
        { title: "Collection", url: "/collection", id: 2 },
        { title: "Sales", url: "/sales", id: 3 }]
   
    const cartOpenHandler = () => {
        openCart();
    };

    const darkModeHandler = () => {
        
        toggleTheme()
        console.log("themeCTX.darkMode", darkMode )
     
    }

    return (
        <Container
            d="flex"
            justify="space-between"
            flex-wrap="wrap"
            style={{
                alignItems: "center",
            }}
           
        >   
            <Div d="flex">
                <Div  onClick={darkModeHandler} 
                >
                    <Link to="/" >
                        <Logo />
                    </Link>
                </Div>
                <Div
                    style={{
                        alignSelf: "center",

                    }}
                  
                    m="2rem"
                    active="red"
                >
                    <Collapse options={options} title={"Shop"}  />

                </Div>
            </Div>

            <Div d="flex">
                <Input
                    placeholder="Search"
                    textAlign="center"

                    style={{
                        alignSelf: "center",
                        placeholder: "center",
                        fontSize: "1rem"
                    }}
                    m="1rem"
                >
                  
                </Input>
                <Div
                    style={{
                        alignSelf: "center",
                    }}
                    m="1rem"
                >
                    <Collapse options={options1} title={"Account"} />
                </Div>

                <Div
                    style={{
                        alignSelf: "center",
                    }}
                >
                    <Anchor onClick={cartOpenHandler} m="1rem">
                        <FaShoppingCart size={40} color={darkMode ? "white": "black"}  />
                    </Anchor>
                </Div>
            </Div>
        </Container>
    );
};

export default NavBar;
