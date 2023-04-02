import React, { useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const valConfig = {
    email: {
      pattern: /\S+@\S+\.\S+/,
      error: 'Некорректный email.'
    },
    password: {
      pattern: /^[\da-zA-Z]{8,}$/,
      error: 'Без кириллицы минимум 8 символов.'
    },
  };

  const setCustomValidationMessages = (name, value) => {
    if (!valConfig[name].pattern.test(value)) {
      setErrors({ ...errors, [name]: valConfig[name].error });
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    setCustomValidationMessages(name, value);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}