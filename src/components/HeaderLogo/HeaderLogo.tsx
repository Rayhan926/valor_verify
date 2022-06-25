import { APP_NAME } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
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
  );
};

export default HeaderLogo;
