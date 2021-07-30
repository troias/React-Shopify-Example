import React, { useContext, useEffect } from "react";
import ShopContext from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Text, Div, Button, Row, Col, Container } from "atomize";

const ProductPage = () => {
    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } =
        useContext(ShopContext);

    useEffect(() => {
        fetchProductWithId(id);
   
    }, []);

   

    if (!product.title) {
        return <div>Loading...</div>;
    }

    const onPurchaseHandler = () => {
    
        addItemToCheckout(product.variants[0].id, 2);
        openCart()
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Div
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="center centre"
                        h="40rem" 
                        m="1rem" />
                </Col>
                <Col>
                    <Div m="1rem">
                        <Text> {product.title}</Text>
                        <Text m="2rem">{product.description} </Text>
                        <Text>{product.vendor} </Text>
                        <Text>{product.variants[0].price} </Text>
                        <Button onClick={onPurchaseHandler} m="2rem">
                            Purchase
                        </Button>
                    </Div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage;
