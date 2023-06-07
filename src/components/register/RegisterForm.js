import React, { useEffect, useState } from "react";
import { FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./generateRegisterFormValues";
import { Button } from "../atoms";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "../../redux";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const {
    formValues: registerFormValues,
    onFormChange,
    checkButtonDisabled,
  } = useForm(generateRegisterFormValues());
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
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
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    setIsButtonDisabled(checkButtonDisabled(registerFormValues));
  }, [registerFormValues]);
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
      <Button onClick={onSubmit} disabled={isButtonDisabled}>
        register
      </Button>
    </FormContainer>
  );
};
