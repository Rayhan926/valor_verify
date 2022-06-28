/*
 *
 * Title: HeaderWithNavLinks
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import AccessDD214Modal from "@components/AccessDD214Modal";
import HeaderLogo from "@components/HeaderLogo";
import UserAvatarDropdown from "@components/UserAvatarDropdown";
import { cx, navLinks } from "@config/constants";
import { NavType } from "@config/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const HeaderWithNavLinks = () => {
  const router = useRouter();
  const [openAccessDD214Modal, setOpenAccessDD214Modal] = useState(false);

  const navLinksWithVatHistory: NavType[] = [
    ...navLinks,
    {
      text: "Veteran History",
      onClick: () => setOpenAccessDD214Modal(true),
    },
  ];

  return (
    <>
      <AccessDD214Modal
        isOpen={openAccessDD214Modal}
        onRequestClose={() => setOpenAccessDD214Modal(false)}
      />
      <header className="pt-8">
        <div className="container">
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-[65px]">
              <HeaderLogo />

              {/* NavLinks --Start-- */}
              <nav>
                <ul className="primary_gradient_reverse flex items-center rounded-full px-14 gap-7">
                  {navLinksWithVatHistory.map(({ text, url, onClick }, i) => {
                    const isActiveLink = router.pathname === url;
                    return (
                      <Fragment key={i}>
                        <li>
                          {!url ? (
                            <button
                              onClick={onClick}
                              className="outline-none border-none text-primary block py-6"
                            >
                              {text}
                            </button>
                          ) : (
                            <Link href={url}>
                              <a
                                className={cx(
                                  "text-primary block py-6",
                                  isActiveLink
                                    ? "font-gorga-bold"
                                    : "font-gorga-light",
                                )}
                              >
                                {text}
                              </a>
                            </Link>
                          )}
                        </li>
                        <li className="w-0.5 h-2 bg-secondary last:hidden"></li>
                      </Fragment>
                    );
                  })}
                </ul>
              </nav>
              {/* NavLinks --End-- */}
            </div>

            <UserAvatarDropdown />
          </div>
          <Image
            width={1540}
            height={2}
            src="/images/header_bottom_line.svg"
            alt="header_bottom_line"
            layout="responsive"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderWithNavLinks;
