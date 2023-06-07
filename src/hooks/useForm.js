import { useState } from "react";

export const useForm = (defaultFormValues) => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const onFormChange = (e) => {
    const { name, value } = e.target;
    const { validateInput } = formValues[name];
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: {
          ...prevFormValues[name],
          value,
          error: validateInput ? validateInput(value) : null,
        },
      };
    });
  };

  const clearForm = (data) => {
    setFormValues(data);
  };

  const checkButtonDisabled = (formValues) => {
    for (let x in formValues) {
      if (formValues[x]?.error) {
        return true;
      }
    }
  };

  return {
    formValues,
    onFormChange,
    clearForm,
    checkButtonDisabled,
  };
};
