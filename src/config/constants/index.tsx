import classnames from "classnames";
import { Styles } from "react-modal";
export const cx = classnames;
export const APP_NAME = "Valor Verify";

export const modalStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: 0,
    boxShadow: "none",
    background: "transparent",
    padding: 0,
    border: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 117,0.06)",
    backdropFilter: "blur(12px)",
  },
};

export const ordinals = [
  "",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st",
];
