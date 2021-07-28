import React, { useContext } from "react";
import { Container, Anchor } from "atomize";
import { Link } from "react-router-dom";
import ShopContext from "../../../context/ShopContext";

const NavBar = () => {
    const { openCart } = useContext(ShopContext);

    const cartOpenHandler = () => {
       
        
        openCart();
    };

    return (
        <Container
            d="flex"
            flexDir="row"
            justify="space-between">
            {" "}
            <Link to="/">Shop</Link>
            <Anchor onClick={cartOpenHandler}>Cart</Anchor>
        </Container>
    );
};

export default NavBar;
