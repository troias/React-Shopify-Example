import React, { useState } from 'react'
import { Div, Tag, Anchor, Icon, Button, } from "atomize";

 const Collapse = () => {
    const [showCollapse, setShowCollapse] = useState(false)
    const [selectedCode, setSelectedCode] = useState({})
    return (
        <>
            <Button
                onClick={() => setShowCollapse(!showCollapse)}
                m={{ b: "1rem" }}
            >
                Toggle Collapse
            </Button>
            {showCollapse ? "" : <Div
                bg="gray100"
                border="1px solid"
                borderColor="gray400"
                rounded="lg"
            >
                {["This", "section", "is", "inside", "collapse"].map(
                    (name, index) => (
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b: index !== 4 && "1px solid" }}
                            borderColor="gray400"
                        >
                            {name}
                        </Div>
                    )
                )}
            </Div>}



        </>
    )
}

export default Collapse