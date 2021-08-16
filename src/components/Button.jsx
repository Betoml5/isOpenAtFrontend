const Button = ({ value, setValues, values, handleClick, shopId }) => {
  return (
    <label className="switch">
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
      <span className="slider round"></span>
    </label>
  );
};

export default Button;
