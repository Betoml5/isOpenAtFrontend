import { useState } from "react";

const Button = ({ value, setValues, values }) => {
  console.log("btn value", values);
  console.log(setValues);
  return (
    <label class="switch">
      <input
        type="checkbox"
        defaultChecked={value}
        onClick={() => {
          setValues({
            ...values,
            value: !values?.values,
          });
        }}
      />
      <span class="slider round"></span>
    </label>
  );
};

export default Button;
