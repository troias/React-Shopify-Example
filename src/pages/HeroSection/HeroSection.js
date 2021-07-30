import React from 'react'
import { Container, Div, Image } from 'atomize'
import heroImage from '../../Assets/Images/HeroImage/HeroImage.jpg'

const HeroSection = () => {
    return (
        <Container>
            <Div >
                <Image src={heroImage} w="100%" h="30rem"  />


            </Div>

        </Container>
    )
}

export default HeroSection
