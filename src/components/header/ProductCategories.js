import { useProduct } from "../../hooks";
import { ListItem, styled, List } from "@mui/material";
import { Link, Text } from "../atoms";
import classes from "./ProductCategories.module.css";
import { useState, useEffect } from "react";
import { Button } from "../atoms";
import { useLocation } from "react-router";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 8px 3px 15px",
  margin: "0px",

  "@media only screen and (max-width: 550px)": {
    padding: "5px 2px 3px 1px",
  },
}));

export const ProductCategories = () => {
  const { categories } = useProduct();

  const [currentCategory, setCurrentCategory] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const categoriesToShow = categories.slice(
    currentCategory,
    currentCategory + 4
  );

  const handleNextCategory = () => {
    if (currentCategory + 3 < categories.length) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const handlePreviousCategory = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  return (
    <List sx={{ display: "flex", margin: "0 auto" }}>
      <Button onClick={handlePreviousCategory} className={classes.arrowButtons}>
        &lt;
      </Button>
      {categoriesToShow.map((category) => {
        const { _id, name } = category;
        return (
          <Link
            key={_id}
            to={`/products/categories/${name}?page=1&sort=price,asc`}
          >
            <StyledListItem>
              <Text className={classes.TextStyle}>{name}</Text>
            </StyledListItem>
          </Link>
        );
      })}
      {categories.length > 3 && (
        <Button onClick={handleNextCategory} className={classes.arrowButtons}>
          &gt;
        </Button>
      )}
    </List>
  );
};
