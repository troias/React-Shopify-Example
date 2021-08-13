import React, { useState } from 'react'
import { Div, Button } from 'atomize'
import img1 from '../../../Assets/Images/Carousel/img1.jpg'
import img2 from '../../../Assets/Images/Carousel/img2.jpg'
import img3 from '../../../Assets/Images/Carousel/img3.jpg'
import CarouselFunc from './CarouselFunc'
// const images = [{ "img1": img1, "img2": img2, "img3": img3 }]

const images = [img1, img2, img3]

const Carousel = () => {



    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);


    const handleClickPrev = () => {
        if (index === 0) return;
        setIndex(index - 1);
        setXPosition(xPosition + width);
    
    };
    const handleClicknext = () => {
        if (index === images.length - 1) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
        }
     
    };
    return (
        <Div
            d="flex"
            bg="#efefef"
           
            
        >
            <CarouselFunc
                images={images}
                setWidth={setWidth}
                xPosition={xPosition}
                handleClickPrev={handleClickPrev}
                handleClicknext={handleClicknext}
            />
   
        </Div>
    )
}

export default Carousel
