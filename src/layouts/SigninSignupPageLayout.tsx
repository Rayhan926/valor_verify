import { APP_NAME } from "@config/constants";
import { SigninSignupPageLayout } from "@config/types";
import Image from "next/image";
import React from "react";

const SigninSignupPageLayout = ({ children }: SigninSignupPageLayout) => {
  return (
    <section className="login_page_bg min-h-screen grid grid-cols-[57%,auto]">
      <div>
        <div className="w-[70%] ml-auto mr-10 mt-40 text-center">
          <div className="w-[180px] mx-auto">
            <Image
              src="/images/valor_verify_logo.svg"
              width={736}
              height={429}
              alt={APP_NAME}
            />
          </div>
          <h1 className="title_60 mt-[90px]">
            <p>A Whole New</p>
            <p>
              Simplified <span className="text-secondary">Experience.</span>
            </p>
          </h1>
          <p className="subtitle_light text-dark-700 text-sm w-[70%] mx-auto mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="w-[670px] mr-auto">{children}</div>
      </div>
    </section>
  );
};

export default SigninSignupPageLayout;
