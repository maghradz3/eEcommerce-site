import { isUserAdmin } from "./helper";
import { ProtectedRoute } from "./helper/ProtectedRoute";
import // CategoryProductPage,
// HomePage,
// LoginPage,
// ProductFormPage,
// RegisterPage,
// SingleProductPage,
"./pages";

import { Routes, Route } from "react-router-dom";
import { useUser } from "./hooks";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const CategoryProductPage = lazy(() => import("./pages/CategoryProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProductFormPage = lazy(() => import("./pages/ProductFormPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));

export const RouteComponent = () => {
  const { userInfo } = useUser();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>...Loading</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>...loading</div>}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>...loading</div>}>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path="/products/categories/:categoryName"
        element={
          <Suspense fallback={<div>...loading</div>}>
            <CategoryProductPage />
          </Suspense>
        }
      />
      <Route
        path="/products/categories/:categoryName/:id"
        element={
          <Suspense fallback={<div>...loading</div>}>
            <SingleProductPage />
          </Suspense>
        }
      />
      <Route
        path="/product/new"
        element={
          <ProtectedRoute isAdmin={isUserAdmin(userInfo)}>
            <Suspense fallback={<div>...loading</div>}>
              <ProductFormPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:name/edit"
        element={
          <ProtectedRoute isAdmin={isUserAdmin(userInfo)}>
            <Suspense fallback={<div>...Loading</div>}>
              <ProductFormPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
