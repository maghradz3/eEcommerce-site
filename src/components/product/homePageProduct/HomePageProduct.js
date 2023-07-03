import React, { useEffect } from "react";
import { useFetchData, useProduct, useQueryParams } from "../../../hooks";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { ProductCard } from "../ProductCard";
import { Paginate, Sort } from "../categoryProduct";
import { useParams } from "react-router";
import { Box, styled } from "@mui/material";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  gap: "20px",
}));

export const HomePageProduct = () => {
  // const { homePageProducts, isProductLoading } = useProduct();
  // const { categoryName } = useParams();
  const { value: sort, changeQuery: changeSort } = useQueryParams("sort");
  const { value: page, changeQuery: changePage } = useQueryParams("page");

  const { getData, data, loading } = useFetchData();

  const { products, totalPages } = data;

  useEffect(() => {
    getData(`/products?size=6&sort=${sort}&page=${page || 1}`);
  }, [page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <Sort sort={sort} changeSort={changeSort} />
        <GridContainer style={{ padding: "30px" }}>
          {products?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </GridContainer>
        <Paginate total={totalPages} page={page} changePage={changePage} />
      </Container>
    </LoadingWrapper>
  );
};
