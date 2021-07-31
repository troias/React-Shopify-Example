import React, { useRef, useEffect } from "react";
import { Button, Image, Div, Container } from "atomize";


export const Wrapper = ({ xPosition, children }) => {

    return (
        <Div
            p="relative"
            w="55%"
            overflow="hidden"
            boxShadow="0 10px 15px rgba(0, 0, 0, 0.4)"

        >
            {children}
        </Div >
    )
}

export const Slide = (props) => {

    const slideRef = useRef();

    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            props.setWidth(width);
            console.log("width", width);
        }
    }, [props.setWidth, props]);

    return (
        <Div
            d="flex"
            w="100%"
            h="450px"
            transition="transform 0.6s ease-in-out"
            ref={slideRef}
            transform={`translateX(${props.xPosition}px)`}
        >
            {props.children}
        </Div>
    )
}


const CarouselFunc = ({
    images,
    setWidth,
    xPosition,
    handleClickPrev,
    handleClicknext }) => {






    return (

        <Wrapper >

            <Slide xPosition={xPosition} setWidth={setWidth} >
                {images.map((img, i) => (
                    <Image src={img} alt="" key={i} w="100%" h="100%" />
                ))}
            </Slide>

            <Div d="flex" justify="center" align="center">
                <Div m="1rem">
                    <Button onClick={handleClickPrev}>Prev</Button>
                </Div>
                <Div>
                    <Button onClick={handleClicknext}>Next</Button>
                </Div>
            </Div>
        </Wrapper>

    );
};

export default CarouselFunc;
