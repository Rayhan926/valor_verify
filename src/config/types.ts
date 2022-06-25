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

export type VateranDetailsCardProps = {
  title: ReactNode;
  lists: {
    label: ReactNode;
    value: ReactNode;
  }[];
} & React.ComponentProps<"div">;

export type NavType = {
  text: ReactNode;
  url?: string;
  onClick?: () => void;
};

export type LastSearchType = {
  name: string;
  type: "Veteran Status" | "Veteran History";
  isVerified?: boolean;
};

export type VeteranStarsStatusBoxProps = {
  progress: ReactNode;
  icon: ReactNode;
  color?: "primary" | "secondary";
};

export type SearchColumnRendererProps = {
  title: ReactNode;
  columnKey: any;
  color?: string;
  render?: (val: any) => ReactNode;
  className?: string;
};
