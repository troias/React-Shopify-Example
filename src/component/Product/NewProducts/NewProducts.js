import React from "react";

import { Container, Div, Text, Row, Col, Image, Button } from "atomize";
import p1 from "../../../Assets/Images/dummyProductImages/p1.jpg";
import p2 from "../../../Assets/Images/dummyProductImages/p1.jpg";
import p3 from "../../../Assets/Images/dummyProductImages/p1.jpg";

const NewProducts = () => {
    return (
        <Container d="flex" flexWrap="wrap" p="0">
            <Div d="flex" w="100%" justify="center" p="0">
                <Row w="100%" justify="center" h="70px" align="center">
                    <Text textColor="black" textSize="heading" fontFamily='Spectral SC' textWeight="bold">New Products</Text>
                </Row>
            </Div>

            <Div d="flex" w="100%" justify="center" >
                <Row w="100%" justify="center" h="250px"  >

                    <Col d="flex" flexWrap="wrap" align="center"  >

                        <Row bg="#CCCBC6" align="center"   m="0.1rem" >
                            <Col >
                                <Text textColor="black" m="1rem">Great product nice feel</Text>
                                <Text textColor="black" m="1rem" textSize="2rem">$126</Text>
                                <Button m="1rem">Buy now</Button>
                            </Col>
                            <Col   >
                                <Image src={p1} />
                            </Col>

                        </Row>

                    </Col>

                    <Col d="flex" align="center"  >
                        <Row bg="#CCCBC6" align="center" >
                            <Col>
                                <Text textColor="black" m="1rem">Great product nice feel</Text>
                                <Text textColor="black" m="1rem" textSize="2rem">$126</Text>
                                <Button m="1rem">Buy now</Button>
                            </Col>
                            <Col>
                                <Image src={p2} h="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col d="flex" align="center"  >
                        <Row bg="#CCCBC6" align="center" m="0.1rem">
                            <Col>
                                <Text textColor="black" m="1rem">Great product nice feel</Text>
                                <Text textColor="black" m="1rem" textSize="2rem">$126</Text>
                                <Button m="1rem">Buy now</Button>
                            </Col>
                            <Col>
                                <Image src={p3} h="100%" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Div>
        </Container>
    );
};

export default NewProducts;
