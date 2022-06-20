import classnames from "classnames";
import { Styles } from "react-modal";
import {
  LastSearchType,
  NavType,
  VateranDetailsCardProps,
} from "@config/types";
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

export const veteranCards: VateranDetailsCardProps[] = [
  {
    title: "Service",
    className: "!-ml-0 !rounded-[30px]",
    lists: [
      {
        label: "Branch:",
        value: "Air Force",
      },
      {
        label: "Start Date:",
        value: "09/01/2001",
      },
      {
        label: "End Date:",
        value: "04/14/2009",
      },
      {
        label: "Pay Grade:",
        value: "W01",
      },
    ],
  },
  {
    title: "Deployments",
    lists: [
      {
        label: "Deployment Start:",
        value: "03/01/2004",
      },
      {
        label: "Deployment End:",
        value: "06/22/2007",
      },
      {
        label: "Deployment Location:",
        value: "IRAQ",
      },
    ],
  },
  {
    title: "Discharge",
    lists: [
      {
        label: "Discharge Status:",
        value: "Honorable",
      },
      {
        label: "Separation Reason:",
        value: (
          <>
            <p>Sufficient service</p>
            for retirement.
          </>
        ),
      },
    ],
  },
  {
    title: "Disability",
    lists: [],
  },
];

export const navLinks: NavType[] = [
  {
    text: "Dashboard",
    url: "/dashboard",
  },
  {
    text: "Veteran Status",
    url: "/vet-status-check",
  },
  {
    text: "Veteran History",
    url: "/vet-history-check",
  },
];

export const last10Searches: LastSearchType[] = [
  {
    name: "Anne Richard",
    type: "Veteran Status",
    isVerified: true,
  },
  {
    name: "David Harrison",
    type: "Veteran Status",
  },
  {
    name: "Finch Hoot",
    type: "Veteran History",
    isVerified: true,
  },
  {
    name: "Bob Dean",
    type: "Veteran Status",
  },
  {
    name: "Lori Hunter",
    type: "Veteran History",
  },
];
