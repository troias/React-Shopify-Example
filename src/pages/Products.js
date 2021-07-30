import React, { useContext, useEffect, useState } from 'react'
import ShopList from "../component/Product/ShopList"
import ShopContext from "../context/ShopContext"
import { Container, Div, List } from 'atomize'

const Products = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetchAllProducts();
      }, []);

    const { products,  fetchAllProducts } = useContext(ShopContext);

    if (!products && loading) return <div> ...Loading </div>;

    return (
   
          <Container >
              <Div 
              d="flex"
              style={{
                flexWrap: "wrap"
              }}
              >
              <ShopList products={products} />
              </Div>
              
          </Container>
               
                   
              
          
    )
      
}

export default Products
