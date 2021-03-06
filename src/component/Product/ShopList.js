import React, { useContext } from 'react'
import {  Text, Div, Col } from "atomize";
import { Link } from "react-router-dom";
import ShopContext from '../../context/ShopContext'

 const ShopList = () => {

  const { products} = useContext(ShopContext)
    return (
        <>
        {products.map((product) => (
            <Col key={product.id} size="3">
              <Link to={`/product/${product.id}`}>
                <Div p="2rem">
                 
                  <Div
                    h="10rem"
                    w="10rem"
                    bgSize="cover"
                    bgPos="center"
                    bgImg={product.images[0].src}
                  />
                  <Text textColor="black" >{product.title}</Text>
                  {/* <Text>{product.description}</Text> */}
                  <Text>{product.variants[0].price}</Text>
                </Div>
              </Link>
            </Col>
          ))}


          </>
    )
}

export default ShopList
