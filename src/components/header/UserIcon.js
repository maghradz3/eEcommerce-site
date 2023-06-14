import { Avatar, IconButton, Box, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { Button } from "../atoms";
import { useNavigate } from "react-router";
import { useUser } from "../../hooks";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux";
import { getUserInitials } from "../../helper";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  borderRadius: 10,
}));

export const UserIcon = () => {
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useUser();
  console.log(userInfo);
  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>{getUserInitials(userInfo)}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyledBox>
          {!userInfo ? (
            <>
              <MenuItem>
                <Button onClick={() => navigate("/login")}>Log In</Button>
              </MenuItem>
              <MenuItem>
                <Button onClick={() => navigate("/register")}>Sign Up</Button>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <Button
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/register");
                }}
              >
                Log Out
              </Button>
            </MenuItem>
          )}
        </StyledBox>
      </Menu>
    </Box>
  );
};
