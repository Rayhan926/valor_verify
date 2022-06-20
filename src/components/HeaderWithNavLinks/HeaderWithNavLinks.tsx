/*
 *
 * Title: HeaderWithNavLinks
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import { APP_NAME, cx, navLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const HeaderWithNavLinks = () => {
  const router = useRouter();
  return (
    <header className="pt-10">
      <div className="container">
        <div className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-[65px]">
            {/* Logo --Start-- */}
            <Link href="/">
              <a>
                <Image
                  src="/images/valor_verify_logo_1.png"
                  alt={APP_NAME}
                  width={180}
                  height={44.36}
                />
              </a>
            </Link>
            {/* Logo --End-- */}

            {/* NavLinks --Start-- */}
            <nav>
              <ul className="primary_gradient_reverse flex items-center rounded-full px-14 gap-7">
                {navLinks.map(({ text, url }, i) => {
                  const isActiveLink = router.pathname === url;
                  return (
                    <Fragment key={i}>
                      <li>
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
                      </li>
                      {navLinks.length - 1 !== i && (
                        <li className="w-0.5 h-2 bg-secondary"></li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            </nav>
            {/* NavLinks --End-- */}
          </div>

          <div className="flex items-center gap-5 relative">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-slate-100 shrink-0">
              <Image
                src="/images/john_smith.png"
                width={83}
                height={83}
                alt="John Smith"
              />
            </div>
            <h6 className="title_18 text-primary">
              <p>John</p>
              <p>Smith</p>
            </h6>

            <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-l from-shadow-primary to-white w-[400%] z-[-1]"></div>
          </div>
        </div>
        <img
          src="/images/header_bottom_line.svg"
          alt="header_bottom_line"
          className="w-full h-auto"
        />
      </div>
    </header>
  );
};

export default HeaderWithNavLinks;
