import React from "react";
import { Div, Text, Row, Col, Container } from "atomize";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const Footer = () => {
    return (
        <Div w="100%"
            h="100%"
            d="flex"
            justify="center"
            align="Center"
            
             >


            <Row >
                <Div d="flex"  >
                    <Div flexDirection="column" align="center" justify="center">
                        <Col size="10" w="8rem">
                            <Div m={{ b: "2rem" }} w="100rem" >
                                <Text w="10rem" textSize="heading" m={{ b: "2rem" }}>
                                    Follow us{" "}
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    {" "}
                                    <FacebookIcon /> Facebook
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    <InstagramIcon /> Instagram
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    <TwitterIcon /> Twitter
                                </Text>
                            </Div>
                        </Col>
                    </Div>

                    <Div flexDirection="column" align="center" justify="center">
                        <Col size="10" w="8rem" maxW="20rem">
                            <Div m={{ b: "2rem" }}>
                                <Text w="10rem" textSize="heading" m={{ b: "2rem" }}>
                                    Categories{" "}
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    {" "}
                                    <VisibilityIcon /> Glasses
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    <AccessibilityIcon /> Jackets
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    <TwitterIcon /> Shoes
                                </Text>
                                <Text m={{ b: "1rem" }}>
                                    <TwitterIcon /> Shirts
                                </Text>
                            </Div>
                        </Col>
                    </Div>

                    <Div

                        flexDirection="column"
                        align="center"
                        justify="center"
                        w="12rem"
                    >
                        <Col size="10" maxW="30rem">
                            <Div m={{ b: "2rem" }}>
                                <Text w="15rem" textSize="heading" m={{ b: "2rem" }}>
                                    Customer Service{" "}
                                </Text>
                                <Text d="flex" m={{ b: "1rem" }}>
                                    {" "}
                                    <ContactMailIcon /> Contact Us
                                </Text>
                                <Text d="flex" m={{ b: "1rem" }}>
                                    <InstagramIcon />
                                    Ordering and payment
                                </Text>
                                <Text d="flex" m={{ b: "1rem" }}>
                                    <AllInboxIcon /> Delivery
                                </Text>
                            </Div>
                        </Col>
                    </Div>
                </Div>
            </Row>
        </Div>

    );
};

export default Footer;
