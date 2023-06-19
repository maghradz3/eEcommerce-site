import React from "react";
import { useProduct } from "../../hooks";
import { ListItem, styled, List } from "@mui/material";
import { Link, Text } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 8px 3px 15px",
  margin: "0px",
}));

export const ProductCategories = () => {
  const { categories } = useProduct();
  return (
    <List sx={{ display: "flex" }}>
      {categories.map((category) => {
        const { _id, name } = category;
        return (
          <Link to={`/products/categories/${name}?page=1&sort=price,asc`}>
            <StyledListItem key={_id}>
              <Text color="black">{name}</Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
