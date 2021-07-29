import React from 'react'
import { Div } from 'atomize'

export const Header = (props) => {
    return (
        <Div>
            {props.children}
        </Div>
    )
}

export default Header