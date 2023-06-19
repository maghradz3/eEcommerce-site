import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const isProductLoading = useSelector((state) => state.product.loading);

  const categories = useSelector((state) => state.product.categories);

  const singleProduct = useSelector((state) => state.product.singleProduct);

  return {
    homePageProducts,
    selectedProduct,
    isProductLoading,
    categories,

    singleProduct,
  };
};
