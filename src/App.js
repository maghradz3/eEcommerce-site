import "./App.css";
import { RouteComponent } from "./Routes";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/product/new">Add Product</Link>
      <RouteComponent />
    </div>
  );
};

export default App;
