import { isUserAdmin } from "./helper";
import { ProtectedRoute } from "./helper/ProtectedRoute";
import { HomePage, LoginPage, ProductFormPage, RegisterPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useUser } from "./hooks";

export const RouteComponent = () => {
  const { userInfo } = useUser();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/product/new"
        element={
          <ProtectedRoute isAdmin={isUserAdmin(userInfo)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:name/edit"
        element={
          <ProtectedRoute isAdmin={isUserAdmin(userInfo)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
