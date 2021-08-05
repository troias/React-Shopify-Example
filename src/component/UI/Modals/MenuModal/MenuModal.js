import React from 'react'
import BackDropModal from '../BackDropModal'
import MenuOverlay from '../ModalOverlay/MenuOverlay'
import ReactDom from  'react-dom'
import { Div } from 'atomize'


 const MenuModal = () => {
    return (
        <Div >
           {ReactDom.createPortal(<BackDropModal/>, document.getElementById("backdrop-root"))} 
           {ReactDom.createPortal(<MenuOverlay/>, document.getElementById("overlay-root"))} 
        </Div>
    )
}
export default MenuModal