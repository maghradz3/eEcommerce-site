// import React, { Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "../components/ErrorBoundary";

import { HomePageProduct } from "../components/product/homePageProduct";
// const HomePageProduct = React.lazy(() =>
//   import("../components/product/homePageProduct/HomePageProduct")
// );

const HomePage = () => {
  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
    //   <Suspense fallback={<div>...sex</div>}>
    <HomePageProduct />
    //   </Suspense>
    // </ErrorBoundary>
  );
};

export default HomePage;
