import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Routes, Route } from "react-router-dom";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
