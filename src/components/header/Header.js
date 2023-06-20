import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { ProductCategories } from "./ProductCategories";
import { Button, Link } from "../atoms";
import { LuHome } from "react-icons/lu";
import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgorundColor: "red",
  padding: "0 35px 0 30px",
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
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">
            <LuHome size={40} color={"wheat"} />
          </Link>
          <SearchBar />
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => setIsCartOpen(true)}>
              <BsCartPlus size={40} color={"wheat"} />
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
