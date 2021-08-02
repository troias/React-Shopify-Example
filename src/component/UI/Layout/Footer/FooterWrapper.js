import React from 'react'
import { Container, Div } from 'atomize'

export const FooterWrapper = (props) => {
    return (
        <Div w="100%"
            h="100%"
            d="flex"
            justify="center"
            align="Center"
        >
            {props.children}
        </Div>
    )
}
