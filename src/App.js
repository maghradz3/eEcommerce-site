import "./App.css";
import { RouteComponent } from "./Routes";

import { Header } from "./components/header/Header";
import { Grid, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCart, fetchHomePageProducts } from "./redux";
import { useUser } from "./hooks";
import { Footer } from "./components/footer";

const StyledGrid = styled(Grid)(() => ({
  paddingTop: "300px",
  minHeight: "100vh",
  width: "100%",
  paddingBottom: "100px",

  backgroundColor: "#f5f5f5",
}));

const App = () => {
  const dispatch = useDispatch();
  const { userInfo } = useUser();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);

  useEffect(() => {
    if (userInfo?._id) {
      dispatch(fetchCart({ userId: userInfo._id }));
    }
  }, [userInfo]);
  return (
    <Grid sx={{ minHeight: "100vh" }}>
      <Header />
      <Grid item></Grid>

      <StyledGrid item>
        <RouteComponent />
      </StyledGrid>
      <Footer />
    </Grid>
  );
};

export default App;
