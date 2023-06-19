import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { useProduct } from "../../../hooks";
import { ProductCard } from "../ProductCard";
import { Box, styled } from "@mui/material";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
}));

export const CategoryProductList = () => {
  const dispatch = useDispatch();
  const { isProductLoading, categoryProducts } = useProduct();
  const { categoryName } = useParams();
  console.log(categoryName);
  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?size=1&sort=price,asc&page=1`)
    );
  }, [categoryName]);

  // const { products: productWithCategory } = categoryProducts;

  // console.log(productWithCategory);

  return (
    <LoadingWrapper isLoading={isProductLoading}>
      <Container>
        <GridContainer>
          {categoryProducts?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
      </Container>
    </LoadingWrapper>
  );
};
