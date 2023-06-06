import React from "react";
import { FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./generateRegisterFormValues";
import { Button } from "../atoms";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../../redux";

export const RegisterForm = () => {
  const { formValues: registerFormValues, onFormChange } = useForm(
    generateRegisterFormValues()
  );

  const dispatch = useDispatch();
  const onSubmit = () => {
    const firstName = registerFormValues.firstName.value;
    const lastName = registerFormValues.lastName.value;
    const email = registerFormValues.email.value;
    const password = registerFormValues.password.value;
    dispatch(
      authenticatedUser({
        formValues: { firstName, lastName, email, password },
        isLogin: false,
      })
    );
  };
  // console.log(registerFormValues);
  return (
    <FormContainer>
      <Input
        name="firstName"
        label="firstName"
        value={registerFormValues.firstName.value}
        error={registerFormValues.firstName.error}
        onChange={onFormChange}
      />
      <Input
        name="lastName"
        label="lastName"
        value={registerFormValues.lastName.value}
        error={registerFormValues.lastName.error}
        onChange={onFormChange}
      />
      <Input
        name="email"
        label="email"
        value={registerFormValues.email.value}
        error={registerFormValues.email.error}
        onChange={onFormChange}
      />
      <Input
        name="password"
        label="password"
        value={registerFormValues.password.value}
        error={registerFormValues.password.error}
        onChange={onFormChange}
      />
      <Button onClick={onSubmit}>register</Button>
    </FormContainer>
  );
};
