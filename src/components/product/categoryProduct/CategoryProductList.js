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
import classes from "./CategoryProductList.module.css";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  gap: "20px",
}));

export const CategoryProductList = () => {
  const { categoryName } = useParams();
  const { value: page, changeQuery: changePage } = useQueryParams("page");
  const { value: sort, changeQuery: changeSort } = useQueryParams("sort");

  const { getData, loading, data } = useFetchData();
  console.log("data", data);
  const { products, totalPages } = data;

  useEffect(() => {
    getData(
      `/products/categories/${categoryName}?size=3&sort=${sort}&page=${page}`
    );
  }, [page, categoryName, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <Sort sort={sort} changeSort={changeSort} />
        <GridContainer className={classes.ProductCont}>
          {products?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate total={totalPages} page={page} changePage={changePage} />
      </Container>
    </LoadingWrapper>
  );
};
