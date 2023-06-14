import React from "react";
import { useProduct } from "../../../hooks";
import { GridContainer } from "../../atoms";
import { ProductCard } from "../ProductCard";

export const HomePageProduct = () => {
  const { homePageProducts } = useProduct();

  return (
    <GridContainer>
      {homePageProducts.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </GridContainer>
  );
};
