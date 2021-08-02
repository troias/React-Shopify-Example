import React from "react";
import { Div, Text,  Col,  Input, Button,  } from "atomize";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const Footer = () => {
    return (



        <Div d="flex" justify="center" bg="#efefef" >
            <Div m={{ r: "1rem" }}>

                <Col size="10" w="15rem" maxW="20rem" >
                    <Div m={{ b: "2rem" }} >
                        <Text w="10rem" textSize="heading" m={{ b: "2rem"}} >
                            Follow us
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                         
                            <FacebookIcon style={{
                                marginRight: "1rem", marginLeft: "0.2rem"
                            }}/> Facebook
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            <InstagramIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Instagram
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            <TwitterIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Twitter
                        </Text>
                    </Div>
                </Col>
            </Div>

            <Div m={{ r: "1rem" }} >
                <Col size="10" w="15rem" maxW="20rem">
                    <Div m={{ b: "2rem" }}>
                        <Text w="10rem" textSize="heading" m={{ b: "2rem" }} >
                            Categories{" "}
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            {" "}
                            <VisibilityIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Glasses
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            <AccessibilityIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Jackets
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            <TwitterIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Shoes
                        </Text>
                        <Text m={{ b: "1rem" }} bg="white">
                            <TwitterIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }} /> Shirts
                        </Text>
                    </Div>
                </Col>
            </Div>

            <Div m={{ r: "1rem" }} >
                <Col size="10"  w="15rem" maxW="30rem">
                    <Div m={{ b: "2rem" }}>
                        <Text w="15rem" textSize="heading" m={{ b: "2rem" }}>
                            Customer Service{" "}
                        </Text>
                        <Text d="flex" m={{ b: "1rem" }} bg="white">
                            {" "}
                            <ContactMailIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }} /> Contact Us
                        </Text>
                        <Text d="flex" m={{ b: "1rem" }} bg="white">
                            <InstagramIcon  style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/>
                            Ordering and payment
                        </Text>
                        <Text d="flex" m={{ b: "1rem" , r: "1rem" }} bg="white">
                            <AllInboxIcon style={{
                                marginRight: "1rem",  marginLeft: "0.2rem"
                            }}/> Delivery
                        </Text>
                    </Div>
                </Col>
            </Div>

            <Div m={{ r: "1rem" }} >
                <Col size="10"  w="15rem" maxW="30rem">
                    <Div m={{ b: "2rem" }}>
                        <Text w="15rem" textSize="heading" m={{ b: "2rem" }}>
                            Sign Up & Save
                        </Text>
                        <Text d="flex" m={{ b: "1rem" }} bg="white">
                            {" "}
                            <ContactMailIcon style={{
                                marginRight: "1rem"
                            }}/>Get £10 off your first order and be the first to hear 
                            about our latest offers, news & promotions.
                             £50 minimum spend required. New customers only.
                        </Text>
                        <label d="flex" m={{ b: "1rem" }}>
                        Please enter your email address
                        </label>
                        <Input placeholder="sign up" m={{b: "1rem" , t: "1rem" }}/>
                            
                       
                        <Button  d="flex" m={{ b: "1rem" , r: "1rem" }}>
                            Sign up
                        </Button >
                    </Div>
                </Col>
            </Div>

        </Div>



    );
};

export default Footer;
