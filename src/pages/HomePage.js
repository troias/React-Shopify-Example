import React, { useContext, useEffect, useState } from "react";
import ShopList from "../component/Product/ShopList"
import ShopContext from "../context/ShopContext";
import { Container, Row } from "atomize";


const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    setLoading(true)
    fetchAllProducts();
  }, []);

  if (!products && loading) return <div> ...Loading </div>;
 

  return (
    <Container>
      <Row>
       <ShopList products={products}/>
      </Row>
    </Container>
  );
};

export default HomePage;
