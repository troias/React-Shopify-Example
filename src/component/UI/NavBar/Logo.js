import React from 'react'
import logo from "../../../Assets/Images/Logo/Logo.svg"
import { Image, Div } from 'atomize'


 const Logo = () => {


    


    return (
        <Div h="100px">
            <Image src={logo} alt="" h="100px"  />
        </Div>
    )
}

export default Logo
