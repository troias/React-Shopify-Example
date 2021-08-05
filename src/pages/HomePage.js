import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import ThemeContext from "../context/ThemeContext";
import { Container, Row, Div } from "atomize";
import HeroSection from "../pages/HeroSection/HeroSection";
import Collections from "./Collections";
import Carousel from "../component/UI/Carousel/Carousel";
import NewProducts from "../component/Product/NewProducts/NewProducts";
import MenuModal from "../component/UI/Modals/MenuModal/MenuModal"

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts();
  }, []);

  const { colors } = useContext(ThemeContext);

  if (!products && loading) return <div> ...Loading </div>;

  return (
    <Container>
      {/* <MenuModal/> */}
      <Div bgSize="cover" bgPos="center">
        <Div w="100%">
          <HeroSection
            style={{
              marginBottom: "20rem",
            }}
          />
        </Div>

        <Row  >
          <NewProducts />
        </Row>
        <Row bg="fff" justify="center"  >
        

          <Carousel />
        </Row>

        <Collections />
      </Div>
    
    </Container>
  );
};

export default HomePage;
