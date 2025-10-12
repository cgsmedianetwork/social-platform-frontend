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
    <div className={`${className} flex flex-col gap-1.5`}>
      <label htmlFor={id} className="text-neutral-600 text-sm font-medium ">
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
          className={`w-full h-auto px-3 py-2.5 text-sm placeholder:text-sm shadow-xs border outline-none focus:outline-none border-gray-300 rounded-md focus:ring-[4px] focus:ring-brand-50 focus:border-brand-400 transition-all duration-250 ${
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
