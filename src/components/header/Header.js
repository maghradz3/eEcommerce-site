import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { Link } from "react-router-dom";
import { ProductCategories } from "./ProductCategories";

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
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">Home</Link>
          <Box sx={{ display: "flex" }}>
            <UserIcon />
          </Box>
        </StyledToolBar>
        <ProductCategories />
      </StyledAppBar>
    </Box>
  );
};
