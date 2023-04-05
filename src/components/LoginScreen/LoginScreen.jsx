import React from 'react';
import './LoginScreen.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Button from '../Button/Button';

export default function LoginScreen({ handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values.email, values.password);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="signin">
      <div className="signin__overlay"></div>
      <div className="card signin__form">
        <h1 className="form__title">Simple Hotel Check</h1>
        <form className="form__content" onSubmit={handleFormSubmit}>
          <label className={`form__label ${errors.email && 'form__label_error'}`} htmlFor="email">Логин</label>
          <input
            className={`input form__input ${errors.email && 'form__input_error'}`}
            type="email"
            name="email"
            autoComplete="email"
            value={values.email || ""}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.email || ''}</span>
          <label className={`form__label ${errors.password && 'form__label_error'}`} htmlFor="password">Пароль</label>
          <input
            className={`input form__input ${errors.password && 'form__input_error'}`}
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password || ""}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.password || ''}</span>
          <Button
            name={"Войти"}
            selector={`button form__button ${!isValid && 'form__button_disabled'}`}
            isDisabled={!isValid}
            type="submit"
          />
        </form>
      </div>
    </main>
  );
}