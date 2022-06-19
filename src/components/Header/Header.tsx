/*
 *
 * Title: Header
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import { APP_NAME } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="pt-10">
      <div className="container">
        <div className="flex items-center justify-between mb-9">
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

export default Header;
