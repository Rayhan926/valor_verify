/*
 *
 * Title: RadioButton
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import { RadioButtonProps } from "@config/types";
import React, { useId } from "react";

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ type = "radio", label, ...props }, ref) => {
    const inputId = useId();
    return (
      <label
        htmlFor={inputId}
        className="inline-flex gap-5 items-center cursor-pointer select-none"
      >
        <div className="w-[18px] h-[18px] rounded-[7px] border border-primary flex items-center justify-center">
          <input
            ref={ref}
            type={type}
            className="sr-only peer"
            id={inputId}
            {...props}
          />
          <div className="w-2.5 h-2.5 rounded-[4px] bg-primary scale-0 peer-checked:scale-100 duration-150"></div>
        </div>
        {label && (
          <p className="text-base text-black cursor-pointer">{label}</p>
        )}
      </label>
    );
  },
);

export default RadioButton;
