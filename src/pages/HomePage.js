import React, { useContext, useEffect, useState } from "react";
import ShopList from "../component/Product/ShopList"
import ShopContext from "../context/ShopContext";
import  ThemeContext  from "../context/ThemeContext"
import { Container, Row, Div } from "atomize";


const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setLoading(true)
    fetchAllProducts();
  }, []);

  const { colors} = useContext(ThemeContext)

  
  if (!products && loading) return <div> ...Loading </div>;


  return (
    <Container   >
      <Div style={{
        backgroundColor: colors.brand100
      }} >
        <Row>
          <ShopList products={products} />
        </Row>
      </Div>
    </Container>
  );
};

export default HomePage;
