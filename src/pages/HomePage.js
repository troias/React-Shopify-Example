import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import  ThemeContext  from "../context/ThemeContext"
import { Container, Row, Div } from "atomize";
import HeroSection from '../pages/HeroSection/HeroSection'
import Collections from './Collections'
import Footer from '../component/UI/Layout/Footer/Footer'


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
      }} 
      bgSize="cover"
      bgPos="center" >
        <Row>
          <HeroSection style={{
            marginBottom: "20rem"
          }}/>
          <Collections/>
       
        </Row>
      </Div>
    </Container>
  );
};

export default HomePage;
