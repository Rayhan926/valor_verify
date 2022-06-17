import React, { ReactNode } from "react";

export type InputProps = {
  label?: ReactNode;
} & React.ComponentProps<"input">;

export type ButtonProps = {} & React.ComponentProps<"button">;
export type SigninSignupPageLayout = {
  children: ReactNode;
};
