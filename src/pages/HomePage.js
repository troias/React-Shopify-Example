import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import { Container, Text, Div, Row, Col } from "atomize";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (!products) return <div> ...Loading </div>;
  console.log(products);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} size="3">
            <Link to={`/product/${product.id}`}>
              <Div p="2rem">
                <Text>{product.title}</Text>
                <Div
                  h="20rem"
                  bgSize="cover"
                  bgPosition="center"
                  bgImg={product.images[0].src}
                />

                <Text>{product.description}</Text>
                <Text>{product.variants[0].price}</Text>
              </Div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
