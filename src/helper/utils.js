import imgUser from "../Images/logo-no-background.png";
import { styled } from "@mui/material";
import { BiLogInCircle } from "react-icons/bi";

export const isUserAdmin = (user) => {
  return user?.role?.includes("admin");
};

export const getUserInitials = (user) => {
  if (user?.firstName && user?.lastName) {
    return `${user.firstName.toUpperCase().charAt(0)}${user.lastName
      .toUpperCase()
      .charAt(0)}`;
  }
  return <BiLogInCircle size={50} />;
};
