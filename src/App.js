import "./App.css";
import { RouteComponent } from "./Routes";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCart, fetchHomePageProducts } from "./redux";
import { useUser } from "./hooks";

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
      <Grid item>
        <Header />
      </Grid>
      <Link to="/product/new">Add Product</Link>
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
    </Grid>
  );
};

export default App;
