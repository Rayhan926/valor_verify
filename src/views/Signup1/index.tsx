import Button from "@components/Button";
import ArrowRight from "@components/Icons/ArrowRight";
import Input from "@components/Input";
import SigninSignupPageLayout from "@layouts/SigninSignupPageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Signup1 = () => {
  const router = useRouter();
  return (
    <SigninSignupPageLayout>
      <div className="px-20 pb-16 pt-16 bg-white rounded-b-[60px]">
        <h2 className="title_40 text-primary">
          <p>Join the</p>
          <p>Valor Verify</p>
        </h2>

        <form className="mt-[60px] space-y-[28px]">
          <Input label="Full Name" placeholder="enter here.." />
          <Input label="Organization" placeholder="enter here.." />
          <Button onClick={() => router.push("/signup2")} className="!mt-20">
            Next
          </Button>

          {/* Sign In --Start-- */}
          <p className="text-center !mt-10">
            Already on Valor Verify?
            <Link href="/signin">
              <a className="__link ml-2">Sign In</a>
            </Link>
          </p>
          {/* Sign In --End-- */}
        </form>
      </div>

      <Link href="#">
        <a className="text-center text-secondary my-10 flex items-center justify-center gap-10">
          Enter In The Web As a Veteran
          <ArrowRight />
        </a>
      </Link>
    </SigninSignupPageLayout>
  );
};

export default Signup1;
