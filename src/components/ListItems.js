import { useState } from "react";
export default function ListItems({
  name,
  value,
  children,
  handleInputChange,
}) {
  function onChange(event) {
    handleInputChange(name, event.target.value);
  }
  return (
    <li>
      <label htmlFor={name}>{children}</label>
      <input type="number" value={value} name={name} onChange={onChange} />
    </li>
  );
}
