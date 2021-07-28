import React, { useContext } from 'react'
import ShopContext from '../../context/ShopContext'
import { Div, SideDrawer, Text, Row, Col, Anchor, Button } from 'atomize'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, fetchCheckOut } = useContext(ShopContext)
    const fetchCheckoutHandler = () => {
        fetchCheckOut(localStorage.getItem("checkout_id"))
        console.log("fetchCheckOut", checkout)
    }
    console.log(isCartOpen)
    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Div
                d="flex"
                flexDir="column"
                m={{
                    b: "4rem"
                }}>
                {checkout.lineItems && checkout.lineItems.map(item => (
                    <Row key={item.id}>
                        <Col>
                            <Div bgImg={item.variant.image.src} bgSize="cover" bgposition="center center" w="4rem" h="5rem" />

                        </Col>
                        <Col>
                            <Text>{item.title}</Text>
                            <Text>{item.variant.title}</Text>
                            <Text>{item.quantity}</Text>
                        </Col>
                        <Col>
                        <Text>{item.variant.price}</Text>
                        </Col>
                    </Row>
                ))}
                <Anchor href={checkout.webUrl} target="_blank">CheckOut</Anchor>
              
            </Div>
            <Div >
            <Button style={{
                position: "fixed", 
                bottom: "0",
                marginBottom: "2rem"
            }}  w="100%" onClick={closeCart}>Close</Button>
            <Button onClick={fetchCheckoutHandler}>Fetch Checkout </Button>
            </Div>
          
        </SideDrawer>
    )
}

export default Cart