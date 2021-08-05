import React from 'react'
import {Container, Div } from 'atomize'

 const BackDropModal = (props) => {
    //  let background_color = "black"
    //  props.open && (background_color = "white" )
    return (
        <Div bg="black"  onClick={props.onConfirm} 
        style={{ 
            position: "fixed",
            top: "0",
            left:" 0",
            width: "100%",
            height:" 100vh",
            zIndex: "10",
            background: "rgba(0, 0, 0, 0.75)",
        }}>
            
        </Div>
    )
}

export default BackDropModal
