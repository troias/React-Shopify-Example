import React from 'react'
import { Container, Div } from 'atomize'

export const FooterWrapper = (props) => {
    return (
        <Container d="flex" justify="center">
         
                {props.children}
          
        </Container>
    )
}
