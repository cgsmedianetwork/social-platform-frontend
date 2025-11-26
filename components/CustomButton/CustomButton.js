import { forwardRef } from "react";
import { cn } from "../../lib/utils"; // You may need to create this utility function

const CustomButton = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      icon,
      iconPosition = "right",
      fullWidth = false,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variants = {
      primary: "bg-brand-500 hover:bg-brand-600 text-neutral-950 shadow-sm",
      secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-sm",
      outline:
        "border border-brand-500 text-brand-500 hover:bg-brand-50 hover:text-brand-600",
      ghost: "text-brand-500 hover:bg-brand-50 hover:text-brand-600",
      destructive: "bg-red-500 hover:bg-red-600 text-white shadow-sm",
      success: "bg-green-500 hover:bg-green-600 text-white shadow-sm",
      warning: "bg-yellow-500 hover:bg-yellow-600 text-white shadow-sm",
      neutral: "bg-neutral-200 hover:bg-neutral-300 text-neutral-800 shadow-sm",
    };

    // Size styles
    const sizes = {
      sm: "px-3 py-1.5 text-xs font-medium rounded-md",
      md: "px-4 py-2 text-sm font-semibold rounded-md",
      lg: "px-6 py-3 text-base font-semibold rounded-lg",
      xl: "px-8 py-4 text-lg font-semibold rounded-xl",
    };

    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Combine all styles
    const buttonStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    // Render icon
    const renderIcon = () => {
      if (loading) {
        return (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
      }

      if (icon) {
        return icon;
      }

      return null;
    };

    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {iconPosition === "left" && renderIcon()}
        {loading ? "Loading..." : children}
        {iconPosition === "right" && renderIcon()}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
