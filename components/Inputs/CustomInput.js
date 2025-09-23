"use client";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const CustomInput = ({
  id,
  label,
  required,
  disabled,
  placeholder,
  type,
  className,
  value,
  defaultValue,
  inputClass,
  inputProps = {},
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(type);

  const handlePassword = () => {
    setOpen(!open);
    selectedType === "password"
      ? setSelectedType("text")
      : setSelectedType("password");
  };
  return (
    <div className={className}>
      <label htmlFor={id} className="text-headerColor text-sm font-semibold ">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <input
          type={selectedType || "text"}
          id={id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full h-auto border rounded-lg flex-1 text-base  px-3 py-2.5 text-headerColor focus:outline-1 hover:border-gray-600 disabled:cursor-not-allowed focus:outline-primaryColor placeholder:text-sm ${
            type === "password" && "pr-8"
          } ${inputClass}`}
          {...inputProps}
          {...props}
        />
        {type === "password" && (
          <div
            onClick={() => handlePassword()}
            className="absolute top-1/2 right-1 -translate-y-1/2 text-gray-600 cursor-pointer p-2"
          >
            {open ? <EyeClosed size={16} /> : <Eye size={16} className="" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
