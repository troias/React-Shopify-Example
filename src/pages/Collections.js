import React from "react";
import { Container, Div, Row, Col, Text, Image, Button } from "atomize";
import p5 from '../Assets/Images/dummyProductImages/p5.jpg'
import p6 from '../Assets/Images/dummyProductImages/p6.jpg'
import p10 from '../Assets/Images/dummyProductImages/p10.jpg'

const Collections = () => {
    return (
        <Container d="flex" align="center" p="0" m="0.5rem">



            <Col bg="white"  >
                <Image src={p5} />


                <Text m={{ b: "0.2rem" }} textAlign="center"  textWeight="900" textSize="title" fontFamily="primary" >Exclusive Watches</Text>
                <Text m={{ b: "1rem" }} textAlign="center"  textSize="subheader" fontFamily="Ubuntu"  textColor="grey" >Everyone should Own</Text>
                <Button w="100%" rounded="0" m={{ b: "1rem" }} bg="black">
                    Watches
                </Button>

                <Button w="100%" rounded="0 " m={{ b: "1rem" }}  bg="black">
                    Shirts
                </Button>

            </Col>
            <Col bg="white">
                <Image src={p6} />
                <Text m={{ b: "0.2rem" }} textAlign="center"   textWeight="900" textSize="title" fontFamily="primary" >Exclusive Shoes</Text>
                <Text m={{ b: "1rem" }} textAlign="center" textSize="subheader" fontFamily="Ubuntu"  textColor="grey" >Diverse selection & leading brands</Text>
                <Button w="100%" rounded="0" m={{ b: "1rem" }}  bg="black">
                    Shoes
                </Button>
                <Button w="100%" rounded="0" m={{ b: "1rem" }}  bg="black">
                    Hats
                </Button>
            </Col>
            <Col bg="white">
                <Image src={p6} />
                <Text m={{ b: "0.2rem" }} textAlign="center"   textWeight="900" textSize="title" fontFamily="primary" >Exclusive Jackets</Text>
                <Text m={{ b: "1rem" }} textAlign="center" textSize="subheader" fontFamily="Ubuntu" textColor="grey" >Keep warm and stylish</Text>
                <Button w="100%" rounded="0" m={{ b: "1rem" }}  bg="black">
                    Glasses
                </Button>
                <Button w="100%" rounded="0" m={{ b: "1rem" }}  bg="black">
                    Jackets
                </Button>
            </Col>

        </Container>
    );
};

export default Collections;
