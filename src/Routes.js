import { ProtectedRoute } from "./helper/ProtectedRoute";
import { HomePage, LoginPage, ProductFormPage, RegisterPage } from "./pages";
import { Routes, Route } from "react-router-dom";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/product/new"
        element={
          <ProtectedRoute isAdmin={true}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
