/*
 *
 * Title: Header
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import HeaderLogo from "@components/HeaderLogo";
import UserAvatarDropdown from "@components/UserAvatarDropdown";
import React from "react";

const Header = () => {
  return (
    <header className="pt-10">
      <div className="container">
        <div className="flex items-center justify-between mb-9">
          <HeaderLogo />
          <UserAvatarDropdown />
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
