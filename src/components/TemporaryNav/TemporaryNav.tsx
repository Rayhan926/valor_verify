import { cx } from "@config/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsQuestion } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
const navs = [
  "/signin",
  "/signup1",
  "/signup2",
  "/reset-password",
  "/forgot-password",
  "/access-dd-214-form",
  "/dashboard",
  // "/modals",
  "/vet-history-check",
  "/vet-history-result",
  "/vet-status-check",
  "/vet-status-not-verified",
  "/vet-status-verified",
  "/veteran-home",
];

const TemporaryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed bottom-6 right-5 z-[50] select-none">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-primary text-white rounded-full flex items-center justify-center w-16 h-16 cursor-pointer"
      >
        {isOpen ? <IoMdClose size={28} /> : <BsQuestion size={32} />}
      </div>
      <div
        className={cx(
          "absolute bottom-[calc(100%+15px)] right-0 w-[500px] bg-white shadow-md py-6 rounded-lg px-5 duration-150",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-5 opacity-0 pointer-events-none",
        )}
      >
        <h4 className="title_24 mb-5 text-primary">Pages</h4>
        <div className="flex flex-wrap gap-2.5">
          {navs.map((nav, i) => {
            const isActive = router.pathname === nav;
            return (
              <Link href={nav} key={i}>
                <a
                  // onClick={() => setIsOpen(false)}
                  className={cx(
                    "capitalize px-4 py-1.5 duration-100 rounded text-primary font-medium border border-primary/5",
                    isActive
                      ? "!text-secondary bg-secondary/5 border-secondary/5 !no-underline"
                      : "hover:bg-primary/5",
                  )}
                >
                  {nav.replace("/", "").split("-").join(" ")}
                </a>
              </Link>
            );
          })}
        </div>

        <p className="subtitle_lg mt-4 text-primary/60">
          This component will be removed in the production. I added it just to
          easily navigate to all pages.
        </p>
      </div>
    </div>
  );
};

export default TemporaryNav;
