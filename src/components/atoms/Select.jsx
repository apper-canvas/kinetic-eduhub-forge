import React from "react";
import { cn } from "@/utils/cn";

const Select = React.forwardRef(({ 
  className, 
  children, 
  error,
  ...props 
}, ref) => {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
        error && "border-red-500 focus:ring-red-500 focus:border-red-500",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";

export default Select;