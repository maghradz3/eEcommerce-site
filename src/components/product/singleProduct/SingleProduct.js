import React, { useEffect } from "react";
import { LoadingWrapper } from "../../atoms";
import { SingleProductCard } from "./SingleProductCard";
import { useProduct } from "../../../hooks";
import { useDispatch } from "react-redux";
import { fetchSingleProduct } from "../../../redux";
import { useParams } from "react-router";

export const SingleProduct = () => {
  const { isProductLoading, singleProduct } = useProduct();
  const dispatch = useDispatch();
  const { category, id } = useParams();
  console.log(category);
  useEffect(() => {
    dispatch(fetchSingleProduct({ id, category }));
  }, [id, category]);
  return (
    <LoadingWrapper isLoading={isProductLoading}>
      <SingleProductCard product={singleProduct} />
    </LoadingWrapper>
  );
};
