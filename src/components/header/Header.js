import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { ProductCategories } from "./ProductCategories";
import { Button, Link } from "../atoms";

import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";
import classes from "./Header.module.css";
import logoImg from "../../Images/logo-no-background.png";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: " #333333",
  padding: "20px 35px 0 30px",
  position: "relative",
}));
const StyledImg = styled("img")(() => ({
  objectFit: "cover",
  objectPosition: "center",
  width: "120px",
  height: "120px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Box>
      <StyledAppBar className={classes.HeaderCont}>
        <StyledToolBar>
          <Link to="/">
            <StyledImg className={classes.LogoImage} src={logoImg} />
          </Link>
          <SearchBar />
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => setIsCartOpen(true)}>
              <BsCartPlus className={classes.CartIcon} size={40} />
            </Button>
            <Box sx={{ display: "flex" }}>
              <UserIcon />
            </Box>
          </Box>
        </StyledToolBar>
        <ProductCategories />
      </StyledAppBar>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Box>
  );
};
