import React, {useContext} from 'react'
import {Div } from "atomize"
import ThemeContext from '../../../context/ThemeContext'

export const HomePageLayout = (props) => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <Div bg={darkMode ? "black" : "white"}
        opacity={darkMode ? "90%" : "100%"}>
              {props.children}
        </Div>
     
    )
}

export default HomePageLayout
