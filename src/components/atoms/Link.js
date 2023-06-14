import { Link as RouterLink } from "react-router-dom";
import React from "react";
export const Link = ({ children, to }) => {
  return (
    <RouterLink to={to} style={{ textDecoration: "none", color: "black" }}>
      {children}
    </RouterLink>
  );
};
