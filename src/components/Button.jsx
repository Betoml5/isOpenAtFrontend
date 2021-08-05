const Button = ({ value, setValues, values, handleClick, shopId }) => {
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

          handleClick(shopId);
        }}
      />
      <span class="slider round"></span>
    </label>
  );
};

export default Button;
