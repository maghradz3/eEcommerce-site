import React from "react";
import { Box, styled } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "../atoms";
import classes from "./Footer.module.css";
import LogoImg from "../../Images/logo-no-background.png";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: " #333333",
  color: theme.palette.primary.contrastText,
  padding: "30px 50px",

  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",

  "@media only screen and (max-width: 550px)": {
    padding: "25px 30px",
  },
}));
const StyledImg = styled("img")(() => ({
  objectFit: "cover",
  objectPosition: "center",
  width: "120px",
  height: "120px",

  "@media only screen and (max-width: 650px)": {
    width: "90px",
    height: "90px",
  },
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <div className={classes.FooterCont}>
        <Link to="/">
          <StyledImg src={LogoImg} />
        </Link>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} LM
        </Typography>
        <Box className={classes.BoxCont}>
          <a href="https://www.facebook.com/Maghradz3ee/" target="blank">
            <BsFacebook className={classes.SocIcons} />
          </a>
          <a href="https://github.com/maghradz3" target="blank">
            <BsGithub className={classes.SocIcons} />
          </a>
          <a
            href="https://www.linkedin.com/in/levan-maghradze-203a21253/"
            target="blank"
          >
            <TiSocialLinkedin className={classes.SocIcons} />
          </a>
        </Box>
      </div>
    </FooterContainer>
  );
};
