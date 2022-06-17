import Button from "@components/Button";
import ArrowRight from "@components/Icons/ArrowRight";
import Input from "@components/Input";
import SigninSignupPageLayout from "@layouts/SigninSignupPageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Signup2 = () => {
  const router = useRouter();
  return (
    <SigninSignupPageLayout>
      <div className="px-20 pb-16 pt-16 bg-white rounded-b-[60px]">
        <h2 className="title_40 text-primary">
          <p>Join the</p>
          <p>Valor Verify</p>
        </h2>

        <form className="mt-[60px] space-y-[28px]">
          <Input label="Email Id" type="email" placeholder="enter here.." />
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="enter here.."
            />
          </div>
          <Button onClick={() => router.push("/signup2")} className="!mt-20">
            Sign Up
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
    </SigninSignupPageLayout>
  );
};

export default Signup2;
