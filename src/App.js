import "./App.css";
import { RouteComponent } from "./Routes";
import { Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCart, fetchHomePageProducts } from "./redux";
import { useUser } from "./hooks";
import { Footer } from "./components/footer";

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

      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100vh",
          width: "100%",
          pb: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <RouteComponent />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default App;
