import { Avatar, IconButton, Box, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { Button } from "../atoms";
import { useNavigate } from "react-router";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  borderRadius: 10,
}));

console.log(StyledBox);

export const UserIcon = () => {
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();
  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>LM</Avatar>
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
          <MenuItem>
            <Button onClick={() => navigate("/login")}>Log In</Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={() => navigate("/register")}>Sign Up</Button>
          </MenuItem>
        </StyledBox>
      </Menu>
    </Box>
  );
};
