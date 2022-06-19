import React, { ReactNode } from "react";

export type InputProps = {
  label?: ReactNode;
  color?: "primary" | "secondary";
  isRequired?: boolean;
} & React.ComponentProps<"input">;

export type ButtonProps = {} & React.ComponentProps<"button">;
export type SigninSignupPageLayout = {
  children: ReactNode;
};
export type RadioButtonProps = {
  label?: ReactNode;
  type?: "radio";
} & Omit<React.ComponentProps<"input">, "id"> &
  Omit<React.ComponentProps<"input">, "type">;

export type DatePickerInputProps = {
  color?: "primary" | "secondary";
  isRequired?: boolean;
};
