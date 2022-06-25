import { cx } from "@config/constants";
import { ButtonProps } from "@config/types";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx(className, "__button")}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
