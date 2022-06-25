import { cx } from "@config/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navs = [
  "/access-dd-214-form",
  "/dashboard",
  "/forgot-password",
  "/modals",
  "/reset-password",
  "/signin",
  "/signup1",
  "/signup2",
  "/vet-history-check",
  "/vet-history-result",
  "/vet-status-check",
  "/vet-status-not-verified",
  "/vet-status-verified",
  "/veteran-home",
];

const TemporaryNav = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-wrap px-2 py-2 bg-slate-100 gap-5 gap-y-3">
      {navs.map((nav, i) => {
        const isActive = router.pathname === nav;
        return (
          <Link href={nav} key={i}>
            <a
              className={cx(
                "capitalize text-sm __link",
                isActive && "!text-secondary !no-underline",
              )}
            >
              {nav.replace("/", "").split("-").join(" ")}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default TemporaryNav;
