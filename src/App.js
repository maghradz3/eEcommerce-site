import "./App.css";
import { RouteComponent } from "./Routes";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Grid } from "@mui/material";

const App = () => {
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
