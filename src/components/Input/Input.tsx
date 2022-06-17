import EyeClosed from "@components/Icons/EyeClosed";
import EyeOpen from "@components/Icons/EyeOpen";
import { cx } from "@config/constants";
import { InputProps } from "@config/types";
import React, { useId, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className = "", ...props }, ref) => {
    const inputId = useId();

    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;
    const isTypePassword = props.type === "password";
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleEye = () => {
      const input = resolvedRef.current;
      if (input.type === "password") {
        setIsShowPassword(true);
        input.type = "text";
      } else {
        setIsShowPassword(false);
        input.type = "password";
      }
    };

    return (
      <div>
        {label && (
          <label htmlFor={inputId} className="block text-dark-700 mb-3">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={resolvedRef}
            id={inputId}
            className={cx("__input", className, isTypePassword && "pr-[75px]")}
            {...props}
          />

          {isTypePassword && (
            <button
              type="button"
              className="absolute outline-none border-none top-1/2 -translate-y-1/2 right-0 text-[#727272] h-full px-5 rounded-r-[18px]"
              onClick={isTypePassword && toggleEye}
            >
              {isShowPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
