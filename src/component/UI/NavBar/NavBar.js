import React, { useContext, useEffect, useState } from "react";
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
    const {toggleTheme, darkMode } = useContext(ThemeContext)
    const [ width, setWidth] = useState(0)


    useEffect(() => {
        const width = document.getElementById('menu').clientWidth
        console.log(width)
        setWidth(width)
    }, [])


   
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
            
            style={{
                alignItems: "center",
            }}
           
           
        >   
            <Div d="flex"
           >
                <Div  onClick={darkModeHandler} 
                className={classes.theme}>
                    <Link to="/" >
                        <Logo  />
                    </Link>
                </Div>
                <Div
                    style={{
                        alignSelf: "center",

                    }}
                   id="menu"
                    className={classes.button1}
                >
                   
                
                </Div>
            </Div>

            <Div d="flex"
               
            >
                <Input
                    className={classes.search}
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
                        marginRight: "1rem"
                    }}
                    m="1rem"
                    className={classes.account}
                >
                   
                </Div>

                <Div
                    style={{
                        alignSelf: "center",
                    }}
                    className={classes.cart}
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
