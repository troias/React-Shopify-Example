import React, { useContext } from "react";
import { Container, Anchor, Div } from "atomize";
import { Link } from "react-router-dom";
import ShopContext from "../../../context/ShopContext";
import Logo from '../../UI/NavBar/Logo'
import { FaShoppingCart } from "react-icons/fa";
import Collapse from "../../UI/Menu/Collapse"
// import {ReactComponent as ReactLogo} from '../../../Assets/Images/Logo/Logo.svg';

const NavBar = () => {
    const { openCart } = useContext(ShopContext);

    const cartOpenHandler = () => {


        openCart();
    };

    return (
        <Container
            d="flex"
            flexDir="row"
            justify="space-between"
            m="auto">
            {" "}
            <Div>
                <Link to="/">
                    <Logo />
                    {/* <ReactLogo/> */}
                </Link>
            </Div>
            <Div style={{
                alignSelf: "center"
            }}>
                <Collapse />

            </Div>
            <Div style={{
                alignSelf: "center"
            }}>
                <Collapse />
            </Div>

            <Div style={{
                alignSelf: "center"
            }} >
                <Anchor onClick={cartOpenHandler} >
                    <FaShoppingCart size={40} color={"black"} />
                </Anchor>
            </Div>

        </Container>
    );
};

export default NavBar;
