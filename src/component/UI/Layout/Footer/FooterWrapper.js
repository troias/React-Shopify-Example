import React from 'react'
import {Container} from 'atomize'

export const FooterWrapper = (props) => {
    return (
        <Container d="flex" justify="space-around">
           {props.children} 
        </Container>
    )
}
