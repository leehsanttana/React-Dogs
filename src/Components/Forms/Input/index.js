import React from "react";
import * as C from "./styles";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <C.Input>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </C.Input>
  );
};

export default Input;
