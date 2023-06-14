import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const isProductLoading = useSelector((state) => state.product.loading);

  const categories = useSelector((state) => state.product.categories);

  return {
    homePageProducts,
    selectedProduct,
    isProductLoading,
    categories,
  };
};
