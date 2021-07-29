import React, { useContext, useEffect, useState } from "react";
import ShopList from "../component/Product/ShopList"
import ShopContext from "../context/ShopContext";
import { theme } from "../component/UI/Theme/Theme"
import { Container, Row, Div } from "atomize";


const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  // const { colors } = useContext(ThemeContext)

  useEffect(() => {
    setLoading(true)
    fetchAllProducts();
  }, []);
  const { colors} = theme
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
