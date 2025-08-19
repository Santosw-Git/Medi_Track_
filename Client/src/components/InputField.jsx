import React from "react";


export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  min,
  max,
  pattern,
  className = "",
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 font-medium text-white" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        pattern={pattern}
        className={`w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}