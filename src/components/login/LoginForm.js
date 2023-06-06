import React from "react";
import { Button, FormContainer, Input } from "../atoms";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../../redux";

export const LoginForm = () => {
  const { formValues: loginFormValues, onFormChange: onLoginFormChange } =
    useForm(generateLoginFormValues());

  const dispatch = useDispatch();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    dispatch(
      authenticatedUser({
        formValues: { email, password },
        isLogin: true,
      })
    );
    console.log(email, password);
  };
  return (
    <FormContainer>
      <Input
        name="email"
        label="email"
        value={loginFormValues.email.value}
        error={loginFormValues.email.error}
        onChange={onLoginFormChange}
      />
      <Input
        name="password"
        label="password"
        value={loginFormValues.password.value}
        error={loginFormValues.password.error}
        onChange={onLoginFormChange}
      />
      <Button onClick={onLogin}>login</Button>
    </FormContainer>
  );
};
