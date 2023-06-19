import React from "react";

import { styled, Box } from "@mui/material";
import { Text } from "../../atoms";

const StyledContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 30px",
}));

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",
}));

const StyledDescription = styled("div")(() => ({
  display: "flex",
  alignItems: "center",

  margin: "20px 50px",
}));

export const SingleProductCard = ({ product }) => {
  const { image, name, brand, description } = product;
  console.log(product);
  return (
    <StyledContainer>
      <StyledImage src={image} />
      <Box>
        <StyledDescription>
          <Text variant="h4" fontSize="30px">
            Product Name:
          </Text>
          <Text variant="h4" fontSize="30px">
            {name}
          </Text>
        </StyledDescription>
        <StyledDescription>
          <Text variant="h4   " fontSize="30px">
            Brand:
          </Text>
          <Text variant="h4" fontSize="30px">
            {brand}
          </Text>
        </StyledDescription>
        <StyledDescription>
          <Text variant="h4" fontSize="30px">
            Description:
          </Text>
          <Text variant="h4" fontSize="30px">
            {description}
          </Text>
        </StyledDescription>
      </Box>
    </StyledContainer>
  );
};
