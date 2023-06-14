import { useForm, useProduct } from "../../../hooks";
import FileBase64 from "react-file-base64";
import { FormContainer, Input, Button } from "../../atoms";
import { generateProductFormValues } from "./generateProductFormValue";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct, setSelectedProduct } from "../../../redux";
import { useNavigate } from "react-router";

export const ProductForm = () => {
  const [image, setImage] = useState("");
  const {
    formValues: productFormValues,
    onFormChange: onProductFormChange,
    checkButtonDisabled,
    setFormValues: setProductFormValues,
  } = useForm(generateProductFormValues());
  const { selectedProduct } = useProduct();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProduct)
      setProductFormValues(generateProductFormValues(selectedProduct));
    setImage(selectedProduct?.image);
  }, [selectedProduct]);

  const onSaveProduct = () => {
    const name = productFormValues.name.value;
    const description = productFormValues.description.value;
    const category = productFormValues.category.value;
    const brand = productFormValues.brand.value;
    const price = productFormValues.price.value;
    dispatch(
      saveProduct({
        product: { name, description, category, brand, price, image },
        productId: selectedProduct?._id,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <FormContainer>
      <Input
        name="name"
        value={productFormValues.name.value}
        onChange={onProductFormChange}
        error={productFormValues.name.error}
        label="Product name"
      />
      <Input
        name="description"
        value={productFormValues.description.value}
        onChange={onProductFormChange}
        error={productFormValues.description.error}
        label="Product description"
      />
      <Input
        name="category"
        value={productFormValues.category.value}
        onChange={onProductFormChange}
        error={productFormValues.category.error}
        label="Product category"
      />
      <Input
        name="brand"
        value={productFormValues.brand.value}
        onChange={onProductFormChange}
        error={productFormValues.brand.error}
        label="Product brand"
      />
      <Input
        name="price"
        value={productFormValues.price.value}
        onChange={onProductFormChange}
        error={productFormValues.price.error}
        label="Product price"
      />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          console.log(base64);
          setImage(base64);
        }}
      />
      <Button onClick={onSaveProduct}>Save Product</Button>
    </FormContainer>
  );
};
