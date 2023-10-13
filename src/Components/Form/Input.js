import React from "react";
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Redux/themeSelectors';

const Input = ({
  register,
  errors,
  name,
  label,
  placeholder,
  className,
  validation,
  type,
  options,
  isDarkMode,
}) => {
  const isTextarea = type === "textarea";

  return (
    <Form.Group className="mb-4">
      <Form.Label className={`text-capitalize ${isDarkMode ? 'text-white' : ''}`}>{label}</Form.Label>
      {isTextarea ? (
        <Form.Control
          as="textarea"
          size="lg"
          {...register(name, validation)}
          className={`${className} ${
            errors && errors[name]?.message ? "border-danger" : "" } `} 
          placeholder={placeholder}
        />
      ) : (
        <Form.Control
          size="lg"
          {...register(name, validation)}
          className={`${className} ${
            errors && errors[name]?.message ? "border-danger" : ""
          }`}
          placeholder={placeholder}
          type={type}
        />
      )}

      {errors && <div className="text-danger text-start">{errors[name]?.message}</div>}
    </Form.Group>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(Input);
