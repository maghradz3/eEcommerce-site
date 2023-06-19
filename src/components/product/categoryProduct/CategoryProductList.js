import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { useProduct, useQueryParams } from "../../../hooks";
import { ProductCard } from "../ProductCard";
import { Box, styled } from "@mui/material";
import { Paginate } from "./Paginate";
import { useFetchData } from "../../../hooks/useFetchData";
import { Sort } from "./Sort";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
}));

export const CategoryProductList = () => {
  const { categoryName } = useParams();
  const { value: page, changeQuery: changePage } = useQueryParams("page");
  const { value: sort, changeQuery: changeSort } = useQueryParams("sort");
  console.log(categoryName);

  const { getData, loading, data } = useFetchData();
  console.log(data);
  const { products, totalPage } = data;
  useEffect(() => {
    getData(
      `products/categories/${categoryName}?size=1&sort=${sort}&page=${page}`
    );
  }, [page, categoryName, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <Sort sort={sort} changeSort={changeSort} />
        <GridContainer>
          {products?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate total={totalPage} page={page} changePage={changePage} />
      </Container>
    </LoadingWrapper>
  );
};
